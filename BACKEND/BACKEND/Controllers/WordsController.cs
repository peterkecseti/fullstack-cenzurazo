using BACKEND.Data;
using BACKEND.Dto;
using BACKEND.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Any;
using System.Text.RegularExpressions;

namespace BACKEND.Controllers
{
    [ApiController]
    [Route("/")]
    public class WordsController : ControllerBase
    {
        private readonly DataContext _context;
        public WordsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Word>>> GetWords()
        {
            return await _context.Words.ToListAsync();
        }

        [HttpPost("add-words")]
        public async Task<IActionResult> AddWords([FromBody] List<WordInputDto> input)
        {
            var words = input.Select(dto => new Word
            {
                Original = dto.Word,
                Replacements = dto.Replacements
            }).ToList();

            _context.Words.AddRange(words);
            await _context.SaveChangesAsync();

            return Ok(words);
        }

        [HttpDelete("delete-word/{id}")]
        public async Task<IActionResult> DeleteWord(int id)
        {
            var word = await _context.Words.FindAsync(id);
            if (word == null)
            {
                return NotFound(new { message = $"Word with ID {id} not found." });
            }

            _context.Words.Remove(word);
            await _context.SaveChangesAsync();

            return Ok(new { message = $"Word with ID {id} deleted." });
        }

        [HttpPost("censore-text")]
        public async Task<IActionResult> CensoreText([FromBody] TextDto text)
        {
            var result = await GetWords();
            var allWords = result.Value?.ToList() ?? new List<Word>();

            string inputText = text.Text;
            string censoredText = inputText;

            var matchedWords = new List<Word>();

            foreach (var word in allWords)
            {
                var pattern = $@"\b{Regex.Escape(word.Original)}\b"; // regex word boundary
                var matches = Regex.Matches(censoredText, pattern, RegexOptions.IgnoreCase);

                if (matches.Count > 0)
                {
                    word.Occourances = matches.Count;
                    matchedWords.Add(word);

                    if (word.Replacements != null && word.Replacements.Any())
                    {
                        int replacementIndex = 0;

                        censoredText = Regex.Replace(censoredText, pattern, match =>
                        {
                            var replacementText = word.Replacements[replacementIndex % word.Replacements.Count];
                            replacementIndex++;

                            var formattedReplacement = 
                                $"<span class='badge badge-success'>" +                 // add bootstrap formatting
                                    $"{MatchCase(replacementText, match.Value)}" +
                                $"</span> " +
                                $"<span class='badge badge-danger'>" +
                                    $"{match.Value}" +
                                $"</span>";
                            return formattedReplacement;

                        }, RegexOptions.IgnoreCase);
                    }
                }
            }

            return Ok(new
            {
                OriginalText = inputText,
                CensoredText = censoredText,
                CensoredWords = matchedWords.Select(word => new
                {
                    word.Original,
                    word.Replacements,
                    word.Occourances
                })
            });
        }

        private static string MatchCase(string replacement, string original)
        {
            if (string.IsNullOrEmpty(original)) return replacement;

            if (original.All(char.IsUpper)) return replacement.ToUpper();

            if (char.IsUpper(original[0])) return char.ToUpper(replacement[0]) + replacement.Substring(1);

            return replacement.ToLower();
        }
    }
}
