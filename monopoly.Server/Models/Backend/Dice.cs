namespace monopoly.Server.Models.Backend
{
    public class Dice
    {
        private int _value = Default;

        public int Value { 
            get
            {
                return _value;
            } 

            set {
                if (value <= MaxValue && value >= MinValue)
                {
                    _value = value;
                    return;
                }

                _value = Default;
            }
        }

        public const int MaxValue = 6;
        public const int MinValue = 1;
        public const int Default = 0;

        public void Roll() {
            var random = new Random();
            Value = random.Next(MinValue, MaxValue + 1);
        }
    }
}
