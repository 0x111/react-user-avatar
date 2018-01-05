'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _initials = require('initials');

var _initials2 = _interopRequireDefault(_initials);

var _contrast = require('contrast');

var _contrast2 = _interopRequireDefault(_contrast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// from https://flatuicolors.com/
var defaultColors = ['#2ecc71', // emerald
'#3498db', // peter river
'#8e44ad', // wisteria
'#e67e22', // carrot
'#e74c3c', // alizarin
'#1abc9c', // turquoise
'#2c3e50'];

function sumChars(str) {
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        sum += str.charCodeAt(i);
    }

    return sum;
}

var UserAvatar = function (_React$Component) {
    _inherits(UserAvatar, _React$Component);

    function UserAvatar() {
        _classCallCheck(this, UserAvatar);

        return _possibleConstructorReturn(this, (UserAvatar.__proto__ || Object.getPrototypeOf(UserAvatar)).apply(this, arguments));
    }

    _createClass(UserAvatar, [{
        key: 'render',
        value: function render() {

            if (!this.props.name) throw new Error('UserAvatar requires a name');

            var abbr = (0, _initials2.default)(this.props.name);
            // size = addPx(size);

            var imageStyle = {
                display: 'block',
                borderRadius: this.props.borderRadius
            };

            var innerStyle = {
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

            var inner = void 0,
                classes = [this.props.className, 'UserAvatar'];
            if (this.props.src || this.props.srcset) {
                inner = _react2.default.createElement('img', { className: 'UserAvatar--img', style: imageStyle, src: this.props.src, srcSet: this.props.srcset, alt: this.props.name });
            } else {
                var background = void 0;
                if (this.props.color) {
                    background = this.props.color;
                } else {
                    // pick a deterministic color from the list
                    var i = sumChars(this.props.name) % this.props.colors.length;
                    background = this.props.colors[i];
                }

                innerStyle.backgroundColor = background;

                inner = abbr;
            }

            if (innerStyle.backgroundColor) {
                classes.push('UserAvatar--' + (0, _contrast2.default)(innerStyle.backgroundColor));
            }

            return _react2.default.createElement(
                'div',
                { 'aria-label': name, className: classes.join(' '), style: this.props.style },
                _react2.default.createElement(
                    'div',
                    { className: 'UserAvatar--inner', style: innerStyle },
                    inner
                )
            );
        }
    }]);

    return UserAvatar;
}(_react2.default.Component);

UserAvatar.propTypes = {
    borderRadius: _propTypes2.default.string,
    src: _propTypes2.default.string,
    srcset: _propTypes2.default.string,
    name: _propTypes2.default.string.isRequired,
    color: _propTypes2.default.string,
    colors: _propTypes2.default.array,
    size: _propTypes2.default.number.isRequired,
    style: _propTypes2.default.object,
    textSizeRatio: _propTypes2.default.number,
    className: _propTypes2.default.string
};

UserAvatar.defaultProps = {
    borderRadius: '100%',
    colors: defaultColors,
    textSizeRatio: 3
};

module.exports = UserAvatar;

//# sourceMappingURL=user-avatar.js.map