import { newE2EPage } from '@stencil/core/testing';

describe('fupu-input-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fupu-input-checkbox></fupu-input-checkbox>');

    const element = await page.find('fupu-input-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
