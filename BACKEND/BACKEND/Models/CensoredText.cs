namespace BACKEND.Models
{
    public class CensoredText
    {
        public string Text { get; set; }
        public List<Word> Words { get; set; }

        public CensoredText(string finalText, List<Word> usedWords)
        {
            Text = finalText;
            Words = usedWords;
        }
    }
}
