import { newE2EPage } from '@stencil/core/testing';

describe('fupu-input-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fupu-input-text></fupu-input-text>');

    const element = await page.find('fupu-input-text');
    expect(element).toHaveClass('hydrated');
  });
});
