import { newE2EPage } from '@stencil/core/testing';

describe('fupu-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fupu-button></fupu-button>');

    const element = await page.find('fupu-button');
    expect(element).toHaveClass('hydrated');
  });
});
