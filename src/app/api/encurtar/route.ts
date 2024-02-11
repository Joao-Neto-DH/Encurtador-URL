import EncurtadorService from "@/services/Encurtador";
import { NextRequest, NextResponse } from "next/server";

async function encurtarURL(req: NextRequest) {
  const long = req.nextUrl.searchParams.get("url");
  const short = req.nextUrl.searchParams.get("term");

  if (long === null || typeof long !== "string" || long.trim().length === 0) {
    return NextResponse.json({ error: "URL inválida" }, { status: 400 });
  }

  const service = new EncurtadorService();

  const response = await service.encurtarURL(long!, short);

  if (!response.ok) {
    const data = await response.json();
    return NextResponse.json(data, { status: 400 });
  }
  const data = await response.json();
  return NextResponse.json(data);
}

export { encurtarURL as POST };
