/* eslint-disable ember/no-observers */
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { addObserver, removeObserver } from '@ember/object/observers';
import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class TsPopoverComponent extends Component {

  @service router;
  @tracked count = 0;
  @tracked multiple = 1;

  constructor() {
    super(...arguments);
    if (this.args) {
      console.log('this.args: ');
      console.log(this.args);
    }
    document.addEventListener('click', this.myClickFunc);
    addObserver(this, 'foo', this.someObserver);
    window.scrollTo(0, 0);
  }

  beforeModel() {
    this.Router.on('routeDidChange', () => window.scrollTo(0, 0));
  }

  get total() {
    return this.count * this.multiple;
  }

  @action
  change(amount) {
    this.count = this.count + amount;
  }

  @action
  double() {
    this.updateMultiple(this.multiple * 2);
  }

  @action
  updateMultiple(newMultiple) {
    this.multiple = newMultiple;
  }
  @action
  myClickFunc() {
    console.log(this.total);
  }

  @action
  someObserver() {
    // ...
    console.log('someObserver called');
  }

  cleanup() {
    removeObserver(this, 'foo', this.someObserver);
  }
}
