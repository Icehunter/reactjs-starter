// @flow

import * as React from 'react';

interface ImportedComponent {
  default?: any;
}

type Props = {};

type State = { component?: any };

export const AsyncComponent = (importComponent: () => ImportedComponent) => {
  return class InnerAsyncComponent extends React.Component<Props, State> {
    state = {
      component: null
    };
    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({ component });
    }
    render() {
      let content = <div />;
      const { component: AsynchronousComponent } = this.state;
      if (AsynchronousComponent) {
        content = <AsynchronousComponent {...this.props} />;
      }

      return content;
    }
  };
};
