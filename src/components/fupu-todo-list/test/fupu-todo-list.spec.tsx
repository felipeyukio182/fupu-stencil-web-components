import { newSpecPage } from '@stencil/core/testing';
import { FupuTodoList } from '../fupu-todo-list';

describe('fupu-todo-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FupuTodoList],
      html: `<fupu-todo-list></fupu-todo-list>`,
    });
    expect(page.root).toEqualHtml(`
      <fupu-todo-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fupu-todo-list>
    `);
  });
});
