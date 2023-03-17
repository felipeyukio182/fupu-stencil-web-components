import { newE2EPage } from '@stencil/core/testing';

describe('fupu-todo-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fupu-todo-list></fupu-todo-list>');

    const element = await page.find('fupu-todo-list');
    expect(element).toHaveClass('hydrated');
  });
});
