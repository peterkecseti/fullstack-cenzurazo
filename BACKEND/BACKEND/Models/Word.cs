namespace BACKEND.Models
{
    public class Word
    {
        public int Id {  get; set; }
        public string Original { get; set; }
        public List<string> Replacements { get; set; }
        public int Occourances {  get; set; }
    }
}
