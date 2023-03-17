import { newSpecPage } from '@stencil/core/testing';
import { FupuButton } from '../fupu-button';

describe('fupu-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FupuButton],
      html: `<fupu-button></fupu-button>`,
    });
    expect(page.root).toEqualHtml(`
      <fupu-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fupu-button>
    `);
  });
});
