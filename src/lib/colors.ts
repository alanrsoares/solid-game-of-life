class HSLGenerator {
  #hueIncrement: number;
  #saturation: number;
  #lightness: number;
  #cache: Record<string, string> = {};

  constructor(hueLength = 100, options = { lightness: 0.6, saturation: 1 }) {
    this.#hueIncrement = 360 / Math.sqrt(hueLength ** 2 * 2);
    this.#saturation = options.saturation * 100;
    this.#lightness = options.lightness * 100;
    this.#cache = {};
  }

  public withHue(hueLength: number) {
    const nextHueIncrement = 360 / Math.sqrt(hueLength ** 2 * 2);

    if (nextHueIncrement !== this.#hueIncrement) {
      this.#cache = {};
    }

    this.#hueIncrement = nextHueIncrement;

    return this;
  }

  public getColor(y: number, x: number) {
    const cacheKey = [y, x].join("-");

    if (cacheKey in this.#cache) {
      return this.#cache[cacheKey];
    }

    const hue = Math.floor(Math.sqrt(y ** 2 + x ** 2) * this.#hueIncrement);
    const hslColor = `hsl(${hue},${this.#saturation}%,${this.#lightness}%)`;

    this.#cache[cacheKey] = hslColor;

    return hslColor;
  }
}

const hslGenerator = new HSLGenerator();

export const getRainbowHSL = (y: number, x: number, hueLength?: number) => {
  return hueLength
    ? hslGenerator.withHue(hueLength).getColor(y, x)
    : hslGenerator.getColor(y, x);
};
