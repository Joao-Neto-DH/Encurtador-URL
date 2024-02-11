import { ErrorShortLink } from "../../../../@types/ErrorShortLink";
import { ShortLink } from "../../../../@types/ShortLink";

class EncurtarURLController {
  private static readonly api_path = "/api/encurtar/";

  /**
   * encurtar
   */
  public async encurtar(form: FormData): Promise<ShortLink | ErrorShortLink> {
    const url = form.get("url")?.toString();
    const term = form.get("term")?.toString();

    const res = await fetch(
      `${EncurtarURLController.api_path}?url=${url}&term=${term}`,
      {
        method: "POST",
      }
    );

    const data = await res.json();

    return data;
    // if (!res.ok) {

    // }
  }
}

export default EncurtarURLController;
