export class DocumentBuilder {
    private header: string = "";
    private body: string = "";
    private footer: string = "";
    public addHeader(header: string): DocumentBuilder {
    this.header = `=== ${header} ===`;

    return this;
  }

    public addBody(body: string): DocumentBuilder {
    this.body = body;
    return this;
  }

    public addFooter(footer: string): DocumentBuilder {
    this.footer = footer;
    return this;
  }

    public build(): string {
    return `${this.header}\n\n${this.body}\n\n${this.footer}`;
  }
}