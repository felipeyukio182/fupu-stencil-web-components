import { newSpecPage } from '@stencil/core/testing';
import { FupuInputCheckbox } from '../fupu-input-checkbox';

describe('fupu-input-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FupuInputCheckbox],
      html: `<fupu-input-checkbox></fupu-input-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <fupu-input-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fupu-input-checkbox>
    `);
  });
});
