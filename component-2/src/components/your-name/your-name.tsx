import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'your-name',
  styleUrl: 'your-name.scss'
})
export class YourName {

  @Prop() first: string;

  @Prop() last: string;

  render() {
    return (
      <p>
        Hello, your name is {this.first} {this.last}
      </p>
    );
  }
}