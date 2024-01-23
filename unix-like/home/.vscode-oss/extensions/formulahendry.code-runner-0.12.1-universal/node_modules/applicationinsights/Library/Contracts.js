// this file is manually constructed and many types and fields here are deprecated.
// Need to switch to use Declarations\Constracts\Generated instead
// This will be consistent with JavaScript SDK
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Contracts;
(function (Contracts) {
    (function (DataPointType) {
        DataPointType[DataPointType["Measurement"] = 0] = "Measurement";
        DataPointType[DataPointType["Aggregation"] = 1] = "Aggregation";
    })(Contracts.DataPointType || (Contracts.DataPointType = {}));
    var DataPointType = Contracts.DataPointType;
    (function (SeverityLevel) {
        SeverityLevel[SeverityLevel["Verbose"] = 0] = "Verbose";
        SeverityLevel[SeverityLevel["Information"] = 1] = "Information";
        SeverityLevel[SeverityLevel["Warning"] = 2] = "Warning";
        SeverityLevel[SeverityLevel["Error"] = 3] = "Error";
        SeverityLevel[SeverityLevel["Critical"] = 4] = "Critical";
    })(Contracts.SeverityLevel || (Contracts.SeverityLevel = {}));
    var SeverityLevel = Contracts.SeverityLevel;
    var ContextTagKeys = (function () {
        function ContextTagKeys() {
            this.applicationVersion = "ai.application.ver";
            this.deviceId = "ai.device.id";
            this.deviceLocale = "ai.device.locale";
            this.deviceModel = "ai.device.model";
            this.deviceOEMName = "ai.device.oemName";
            this.deviceOSVersion = "ai.device.osVersion";
            this.deviceType = "ai.device.type";
            this.locationIp = "ai.location.ip";
            this.operationId = "ai.operation.id";
            this.operationName = "ai.operation.name";
            this.operationParentId = "ai.operation.parentId";
            this.operationSyntheticSource = "ai.operation.syntheticSource";
            this.operationCorrelationVector = "ai.operation.correlationVector";
            this.sessionId = "ai.session.id";
            this.sessionIsFirst = "ai.session.isFirst";
            this.userAccountId = "ai.user.accountId";
            this.userAgent = "ai.user.userAgent";
            this.userId = "ai.user.id";
            this.userAuthUserId = "ai.user.authUserId";
            this.cloudRole = "ai.cloud.role";
            this.cloudRoleInstance = "ai.cloud.roleInstance";
            this.internalSdkVersion = "ai.internal.sdkVersion";
            this.internalAgentVersion = "ai.internal.agentVersion";
            this.internalNodeName = "ai.internal.nodeName";
        }
        return ContextTagKeys;
    }());
    Contracts.ContextTagKeys = ContextTagKeys;
    var Domain = (function () {
        function Domain() {
        }
        return Domain;
    }());
    Contracts.Domain = Domain;
    var Data = (function () {
        function Data() {
        }
        return Data;
    }());
    Contracts.Data = Data;
    var Envelope = (function () {
        function Envelope() {
            this.ver = 1;
            // the 'name' property must be initialized before 'tags' and/or 'data'.
            this.name = "";
            // the 'time' property must be initialized before 'tags' and/or 'data'.
            this.time = "";
            this.sampleRate = 100.0;
            this.tags = {};
        }
        return Envelope;
    }());
    Contracts.Envelope = Envelope;
    var EventData = (function (_super) {
        __extends(EventData, _super);
        function EventData() {
            _super.call(this);
            this.ver = 2;
            this.properties = {};
            this.measurements = {};
            _super.call(this);
        }
        return EventData;
    }(Contracts.Domain));
    Contracts.EventData = EventData;
    var MessageData = (function (_super) {
        __extends(MessageData, _super);
        function MessageData() {
            _super.call(this);
            this.ver = 2;
            this.properties = {};
            _super.call(this);
        }
        return MessageData;
    }(Contracts.Domain));
    Contracts.MessageData = MessageData;
    var ExceptionData = (function (_super) {
        __extends(ExceptionData, _super);
        function ExceptionData() {
            _super.call(this);
            this.ver = 2;
            this.exceptions = [];
            this.properties = {};
            this.measurements = {};
        }
        return ExceptionData;
    }(Contracts.Domain));
    Contracts.ExceptionData = ExceptionData;
    var StackFrame = (function () {
        function StackFrame() {
        }
        return StackFrame;
    }());
    Contracts.StackFrame = StackFrame;
    var ExceptionDetails = (function () {
        function ExceptionDetails() {
            this.hasFullStack = true;
            this.parsedStack = [];
        }
        return ExceptionDetails;
    }());
    Contracts.ExceptionDetails = ExceptionDetails;
    var DataPoint = (function () {
        function DataPoint() {
            this.kind = Contracts.DataPointType.Measurement;
        }
        return DataPoint;
    }());
    Contracts.DataPoint = DataPoint;
    var MetricData = (function (_super) {
        __extends(MetricData, _super);
        function MetricData() {
            _super.call(this);
            this.ver = 2;
            this.metrics = [];
            this.properties = {};
            _super.call(this);
        }
        return MetricData;
    }(Contracts.Domain));
    Contracts.MetricData = MetricData;
    var PageViewData = (function (_super) {
        __extends(PageViewData, _super);
        function PageViewData() {
            _super.call(this);
            this.ver = 2;
            this.properties = {};
            this.measurements = {};
            _super.call(this);
        }
        return PageViewData;
    }(Contracts.EventData));
    Contracts.PageViewData = PageViewData;
    var PageViewPerfData = (function (_super) {
        __extends(PageViewPerfData, _super);
        function PageViewPerfData() {
            _super.call(this);
            this.ver = 2;
            this.properties = {};
            this.measurements = {};
        }
        return PageViewPerfData;
    }(Contracts.PageViewData));
    Contracts.PageViewPerfData = PageViewPerfData;
    var RemoteDependencyDataConstants = (function () {
        function RemoteDependencyDataConstants() {
        }
        RemoteDependencyDataConstants.TYPE_HTTP = "Http";
        return RemoteDependencyDataConstants;
    }());
    Contracts.RemoteDependencyDataConstants = RemoteDependencyDataConstants;
    var RemoteDependencyData = (function (_super) {
        __extends(RemoteDependencyData, _super);
        function RemoteDependencyData() {
            _super.call(this);
            this.ver = 2;
            this.success = true;
            this.properties = {};
            this.measurements = {};
        }
        return RemoteDependencyData;
    }(Contracts.Domain));
    Contracts.RemoteDependencyData = RemoteDependencyData;
    var AjaxCallData = (function (_super) {
        __extends(AjaxCallData, _super);
        function AjaxCallData() {
            _super.call(this);
            this.ver = 2;
            this.properties = {};
            this.measurements = {};
            _super.call(this);
        }
        return AjaxCallData;
    }(Contracts.PageViewData));
    Contracts.AjaxCallData = AjaxCallData;
    var RequestData = (function (_super) {
        __extends(RequestData, _super);
        function RequestData() {
            _super.call(this);
            this.ver = 2;
            this.properties = {};
            this.measurements = {};
        }
        return RequestData;
    }(Contracts.Domain));
    Contracts.RequestData = RequestData;
    var PerformanceCounterData = (function (_super) {
        __extends(PerformanceCounterData, _super);
        function PerformanceCounterData() {
            _super.call(this);
            this.ver = 2;
            this.kind = DataPointType.Aggregation;
            this.properties = {};
            _super.call(this);
        }
        return PerformanceCounterData;
    }(Contracts.Domain));
    Contracts.PerformanceCounterData = PerformanceCounterData;
})(Contracts = exports.Contracts || (exports.Contracts = {}));
