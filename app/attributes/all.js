System.register(['./drag-value', './drop-action', './drop-type', './on-event', './ref'], function(exports_1) {
    function exportStar_1(m) {
        for(var n in m) {
            if (n !== "default") exports_1(n, m[n]);
        }
    }
    return {
        setters:[
            function (_drag_value_1) {
                exportStar_1(_drag_value_1);
            },
            function (_drop_action_1) {
                exportStar_1(_drop_action_1);
            },
            function (_drop_type_1) {
                exportStar_1(_drop_type_1);
            },
            function (_on_event_1) {
                exportStar_1(_on_event_1);
            },
            function (_ref_1) {
                exportStar_1(_ref_1);
            }],
        execute: function() {
        }
    }
});
