import React from 'react';
import {DefaultButton, FontWeights, loadTheme, Stack, Text} from 'office-ui-fabric-react';
import {initializeIcons} from '@uifabric/icons';
// @ts-ignore
import DarkMode from 'darkmode-js';

// 设定主题
let theme = loadTheme({
    palette: {
        themePrimary: '#0078d4',
        themeLighterAlt: '#eff6fc',
        themeLighter: '#deecf9',
        themeLight: '#c7e0f4',
        themeTertiary: '#71afe5',
        themeSecondary: '#2b88d8',
        themeDarkAlt: '#106ebe',
        themeDark: '#005a9e',
        themeDarker: '#004578',
        neutralLighterAlt: '#f8f8f8',
        neutralLighter: '#f4f4f4',
        neutralLight: '#eaeaea',
        neutralQuaternaryAlt: '#dadada',
        neutralQuaternary: '#d0d0d0',
        neutralTertiaryAlt: '#c8c8c8',
        neutralTertiary: '#c2c2c2',
        neutralSecondary: '#858585',
        neutralPrimaryAlt: '#4b4b4b',
        neutralPrimary: '#333333',
        neutralDark: '#272727',
        black: '#1d1d1d',
        white: '#ffffff',
    },
});

// 初始化图标
initializeIcons(undefined, {disableWarnings: true});

const boldStyle = {root: {fontWeight: FontWeights.semibold}};


export const App = () => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    const [
        // isOpen
        ,setIsOpen
    ] = React.useState(false);

    const openPanel = () => setIsOpen(true);
    // const dismissPanel = () => setIsOpen(false);
    let darkMode = new DarkMode();
    const isDarkMode = darkMode.isActivated();

    // if (!isDarkMode) {
    //     new DarkMode({
    //         mixColor: theme.palette.neutralLight, // default: '#fff'
    //         backgroundColor: theme.palette.neutralLight,  // default: '#fff'
    //         saveInCookies: false, // default: true,
    //         autoMatchOsTheme: true // default: true
    //     })
    // }

    return (
        <>
            <Stack
                horizontalAlign="center"
                verticalAlign="center"
                verticalFill
                styles={{
                    root: {
                        width: '100%',
                        margin: '0 auto',
                        textAlign: 'center',
                        color: '#605e5c'
                    }
                }}
                gap={15}
            >

                <Text variant="xLargePlus" styles={boldStyle}>Novoland</Text>
                <Text variant={ isMobile? 'xxLargePlus' : 'mega'}>九州 · 机巧殿</Text>
                <Text variant="large">To Build Our Novoland Together</Text>
                <Text variant="large" styles={boldStyle}>
                    构建属于我们的九州
                </Text>
                <DefaultButton
                    style={{
                        backgroundColor: (
                            isDarkMode
                                ? theme.palette.black
                                : theme.palette.neutralLight
                        )
                    }}
                    primary={true} disabled={true} text="即将现世" onClick={openPanel}/>
            </Stack>
        </>
    );
};
