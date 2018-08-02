// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { Input } from 'reactstrap';
import { BootSwatchThemes } from '../../constants/theming';
import { ApplicationSettingsThemeChanged } from '../../store/actions';
import { ReactJSStorage } from '../../utilities';
import type { ApplicationState } from '../../store/types';
import type { Dispatch } from 'redux';

import type { ApplicationDispatchActions, ApplicationSettingsState } from '../../store/types';

const LayoutStorage = new ReactJSStorage('layout');

type Props = {
  applicationSettings: ApplicationSettingsState,
  dispatch: Dispatch<ApplicationDispatchActions>
};

class ThemeChooser extends React.Component<Props> {
  onChange = (e: any) => {
    const theme = { name: e.target.value, ...BootSwatchThemes[e.target.value] };

    LayoutStorage.setItemJSON('theme', theme);

    this.props.dispatch(ApplicationSettingsThemeChanged(theme));
  };
  render() {
    const { applicationSettings } = this.props;
    const { value } = applicationSettings;
    const { theme } = value;
    return (
      <Input type="select" value={theme.name} onChange={this.onChange}>
        {Object.keys(BootSwatchThemes).map((key) => {
          return (
            <option key={`theme-${key}`} value={key}>
              {key}
            </option>
          );
        })}
      </Input>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => {
  const { store } = state;
  const { applicationSettings } = store;
  return { applicationSettings };
};

export default connect(mapStateToProps)(ThemeChooser);
