import React, {useState} from 'react';

const {Provider, Consumer} = React.createContext()

const ThemeProvider = (props) => {
    const [scrollPosition, setScrollPosition] = useState(0)

    document.addEventListener('scroll', () => {
        // console.log(window.scrollY)
        setScrollPosition(window.scrollY)
    })

    return (
        <Provider value={{
            scrollPosition,
        }}>
            {props.children}
        </Provider>
    );
};

export const withTheme = C => props => (
    <Consumer>
        {value => <C {...value} {...props} />}
    </Consumer>
)

export default ThemeProvider;
