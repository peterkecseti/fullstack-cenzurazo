using BACKEND.Data;
using BACKEND.Dto;
using BACKEND.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
    }
}
