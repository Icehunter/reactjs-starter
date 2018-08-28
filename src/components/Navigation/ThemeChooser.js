// @flow

import * as React from 'react';
import { Input } from 'reactstrap';
import { BootSwatchThemes } from '../../constants/theming';
import { ComponentBuilder, ReactJSStorage } from '../../extensions';
import { ApplicationSettingsThemeChanged } from '../../store/actions';
import { ApplicationSettings } from '../../store/selectors';

import type { CommonProps } from '../../extensions';

const LayoutStorage = new ReactJSStorage('layout');

type Props = {
  setTheme: Function
} & CommonProps;

class ThemeChooser extends React.Component<Props> {
  onChange = (e: any) => {
    const theme = {
      index: e.target.value,
      ...BootSwatchThemes[e.target.value]
    };

    LayoutStorage.setItemJSON('theme', theme);

    this.props.setTheme(theme);
  };
  render() {
    const { store } = this.props;
    const currentTheme = ApplicationSettings.getTheme(store);

    return (
      <Input type="select" value={currentTheme.index} onChange={this.onChange}>
        {BootSwatchThemes.map((themeOption, index) => {
          return (
            <option key={`theme-${index}`} value={index}>
              {themeOption.name}
            </option>
          );
        })}
      </Input>
    );
  }
}

export default ComponentBuilder(ThemeChooser)
  .AddReducer('applicationSettings')
  .AddDispatchers({
    setTheme: ApplicationSettingsThemeChanged
  })
  .Compile();
