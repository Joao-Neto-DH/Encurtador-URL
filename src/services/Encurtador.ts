class EncurtadorService {
  /**
   * encurtar
   */
  public async encurtarURL(long: string, short: string | null) {
    return await fetch(
      `${process.env.API_URL}/addURL?long=${long}&short=${short}`,
      {
        method: "POST",
      }
    );
  }
}

export default EncurtadorService;
