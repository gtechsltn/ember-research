import { module, test } from 'qunit';
import { setupRenderingTest } from 'third-sight-portal/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ts-popover', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TsPopover />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <TsPopover>
        template block text
      </TsPopover>
    `);

    assert.dom().hasText('template block text');
  });
});
