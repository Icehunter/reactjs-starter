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
      const { component: AsynchronousComponent } = this.state;
      if (AsynchronousComponent) {
        return <AsynchronousComponent {...this.props} />;
      }
      return (
        <div>
          <i className="fa fas fa-spinner fa-spin" />
        </div>
      );
    }
  };
};
