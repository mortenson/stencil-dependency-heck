var YourName = /** @class */ (function () {
    function YourName() {
    }
    YourName.prototype.render = function () {
        return (h("p", 0, t("Hello, your name is "),
            this.first, t(" "),
            this.last));
    };
    return YourName;
}());
export { YourName };
