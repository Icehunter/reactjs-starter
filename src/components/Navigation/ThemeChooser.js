// @flow

import * as React from 'react';
import { Input } from 'reactstrap';
import { BootSwatchThemes } from '../../constants/theming';
import { ComponentBuilder, ReactJSStorage } from '../../extensions';
import { ApplicationSettingsThemeChanged } from '../../store/actions';
import { ApplicationSettings } from '../../store/selectors';
import type { CommonProps } from '../../extensions';

const LayoutStorage = new ReactJSStorage('layout');

type Props = {} & CommonProps;

class ThemeChooser extends React.Component<Props> {
  onChange = (e: any) => {
    const theme = { name: e.target.value, ...BootSwatchThemes[e.target.value] };

    LayoutStorage.setItemJSON('theme', theme);

    this.props.dispatch(ApplicationSettingsThemeChanged(theme));
  };
  render() {
    const { store } = this.props;
    const theme = ApplicationSettings.getTheme(store);
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

export default new ComponentBuilder(ThemeChooser)
  .AddTranslation()
  .AddReducer('applicationSettings')
  .Compile();
