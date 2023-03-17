import { newSpecPage } from '@stencil/core/testing';
import { FupuInputText } from '../fupu-input-text';

describe('fupu-input-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FupuInputText],
      html: `<fupu-input-text></fupu-input-text>`,
    });
    expect(page.root).toEqualHtml(`
      <fupu-input-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fupu-input-text>
    `);
  });
});
