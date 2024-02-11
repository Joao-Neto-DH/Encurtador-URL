class CopiarController {
  /**
   * copiar
   */
  public copiar(texto: string) {
    navigator.clipboard.writeText(texto);
  }
}

export default CopiarController;
