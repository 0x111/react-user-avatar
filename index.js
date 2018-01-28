import React from 'react';
import PropTypes from 'prop-types';
import initials from 'initials';
import contrast from 'contrast';

// from https://flatuicolors.com/
const defaultColors = [
    '#2ecc71', // emerald
    '#3498db', // peter river
    '#8e44ad', // wisteria
    '#e67e22', // carrot
    '#e74c3c', // alizarin
    '#1abc9c', // turquoise
    '#2c3e50', // midnight blue
];

function sumChars(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += str.charCodeAt(i);
    }

    return sum;
}

class UserAvatar extends React.Component {
    render() {
        const abbr = initials(this.props.name);
        // size = addPx(size);

        const imageStyle = {
            display: 'block',
            borderRadius: this.props.borderRadius
        };

        const innerStyle = {
            lineHeight: this.props.size + "px",
            width: this.props.size + "px",
            height: this.props.size + "px",
            textAlign: 'center',
            fontSize: Math.floor(this.props.size / this.props.textSizeRatio),
            borderRadius: this.props.borderRadius
        };

        if (this.props.size) {
            imageStyle.width = innerStyle.width = innerStyle.maxWidth = this.props.size + "px";
            imageStyle.height = innerStyle.height = innerStyle.maxHeight = this.props.size + "px";
        }

        let inner, classes = [this.props.className, 'UserAvatar'];
        if (this.props.src || this.props.srcset) {
            inner = <img className="UserAvatar--img" style={imageStyle} src={this.props.src} srcSet={this.props.srcset} alt={this.props.name} />
        } else {
            let background;
            if (this.props.color) {
                background = this.props.color;
            } else {
                // pick a deterministic color from the list
                let i = sumChars(this.props.name) % this.props.colors.length;
                background = this.props.colors[i];
            }

            innerStyle.backgroundColor = background;

            inner = abbr;
        }

        if (innerStyle.backgroundColor) {
            classes.push(`UserAvatar--${contrast(innerStyle.backgroundColor)}`);
        }

        return (
            <div aria-label={name} className={classes.join(' ')} style={this.props.style}>
                <div className="UserAvatar--inner" style={innerStyle}>
                    {inner}
                </div>
            </div>
        )
    }
}

UserAvatar.propTypes = {
    borderRadius: PropTypes.string,
    src: PropTypes.string,
    srcset: PropTypes.string,
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    colors: PropTypes.array,
    size: PropTypes.number.isRequired,
    style: PropTypes.object,
    textSizeRatio: PropTypes.number,
    className: PropTypes.string
};

UserAvatar.defaultProps = {
    name: 'John Doe',
    borderRadius: '100%',
    colors: defaultColors,
    textSizeRatio: 3
};


module.exports = UserAvatar;
