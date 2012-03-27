var g = require("bignumber").BigInteger;
function i(a, b, c) {
  b[c] = (a - (a & 16777215)) / Math.pow(2, 24);
  b[c + 1] = a >>> 16 & 255;
  b[c + 2] = a >>> 8 & 255;
  b[c + 3] = a & 255
}
require("assert");
function j(a, b) {
  var c;
  c = 0;
  c = a[b + 1] << 16;
  c |= a[b + 2] << 8;
  c |= a[b + 3];
  c = 16777216 * a[b] + c;
  return!(c & 2147483648) ? c : -1 * (4294967295 - c + 1)
}
function l(a, b) {
  var c = [], e, d, f, h;
  c[0] = a[b];
  c[1] = a[b + 1];
  c[2] = a[b + 2];
  c[3] = a[b + 3];
  c[4] = a[b + 4];
  c[5] = a[b + 5];
  c[6] = a[b + 6];
  c[7] = a[b + 7];
  e = c[0] & 128;
  d = (c[0] & 127) << 4;
  d |= (c[1] & 240) >>> 4;
  h = c[7];
  h |= c[6] << 8;
  h |= c[5] << 16;
  f = c[4];
  f |= c[3] << 8;
  f |= c[2] << 16;
  f |= (c[1] & 15) << 24;
  f *= Math.pow(2, 24);
  f += h;
  if(!e && 2047 == d && 0 === f) {
    return Number.POSITIVE_INFINITY
  }
  if(e && 2047 == d && 0 === f) {
    return Number.NEGATIVE_INFINITY
  }
  if(2047 == d && 0 !== f) {
    return Number.NaN
  }
  if(0 === d && 0 === f) {
    return 0
  }
  d -= 1023;
  -1023 == d ? (d++, c = 0) : c = 1;
  c = (c + f * Math.pow(2, -52)) * Math.pow(2, d);
  e && (c *= -1);
  return c
}
function m(a) {
  this.buffer = a || [];
  this.position = 0
}
m.prototype.readBinary = function(a) {
  return this.buffer.slice(this.position, this.position += a)
};
m.prototype.writeBinary = function(a) {
  for(var b = 0, c = a.length, e = this.position;b < c;b++) {
    this.buffer[e + b] = a[b]
  }
  this.position += c
};
m.prototype.readByte = function() {
  var a = this.buffer, b = this.position++;
  return!(a[b] & 128) ? a[b] : -1 * (255 - a[b] + 1)
};
m.prototype.writeByte = function(a) {
  this.buffer[this.position++] = 0 <= a ? a : 255 + a + 1
};
m.prototype.readShort = function() {
  var a = (this.position += 2) - 2, b = this.buffer, c = 0, c = b[a] << 8, a = c |= b[a + 1];
  return!(a & 32768) ? a : -1 * (65535 - a + 1)
};
m.prototype.writeShort = function(a) {
  var b = this.buffer, c = (this.position += 2) - 2;
  0 <= a || (a = 65535 + a + 1);
  b[c] = (a & 65280) >>> 8;
  b[c + 1] = a & 255
};
m.prototype.readInt = function() {
  return j(this.buffer, (this.position += 4) - 4)
};
m.prototype.writeInt = function(a) {
  var b = this.buffer, c = (this.position += 4) - 4;
  0 <= a ? i(a, b, c) : i(4294967295 + a + 1, b, c)
};
m.prototype.readDouble = function() {
  return l(this.buffer, (this.position += 8) - 8)
};
m.prototype.writeDouble = function(a) {
  var b = a, a = this.buffer, c = (this.position += 8) - 8, e, d, f, h = [];
  isNaN(b) ? (e = 0, d = 2047, b = 23) : b == Number.POSITIVE_INFINITY ? (e = 0, d = 2047, b = 0) : b == Number.NEGATIVE_INFINITY ? (e = 1, d = 2047, b = 0) : (0 > b ? (e = 1, b = Math.abs(b)) : e = 0, f = Math.floor(Math.log(b) / Math.log(2)), 2.225073858507201E-308 >= b || -1023 >= f ? (d = 0, b = b * Math.pow(2, 1023) * Math.pow(2, 51)) : (1023 < f && (f = 1023), d = 1023 + f, b *= Math.pow(2, -f), b *= Math.pow(2, 52)), b %= Math.pow(2, 52));
  h[7] = b & 255;
  h[6] = b >>> 8 & 255;
  h[5] = b >>> 16 & 255;
  b = (b - (b & 16777215)) / Math.pow(2, 24);
  h[4] = b & 255;
  h[3] = b >>> 8 & 255;
  h[2] = b >>> 16 & 255;
  h[1] = (d & 15) << 4 | b >>> 24;
  h[0] = e << 7 | (d & 2032) >>> 4;
  a[c] = h[0];
  a[c + 1] = h[1];
  a[c + 2] = h[2];
  a[c + 3] = h[3];
  a[c + 4] = h[4];
  a[c + 5] = h[5];
  a[c + 6] = h[6];
  a[c + 7] = h[7]
};
m.prototype.readLongBytes = function() {
  for(var a = [], b = 0;8 > b;b++) {
    a.push(this.buffer[this.position + b])
  }
  this.position += 8;
  return new g(a)
};
m.prototype.readLong = function() {
  return this.readLongBytes()[0]
};
m.prototype.writeLong = function(a) {
  "number" === typeof a && (a = new g(a.toString()));
  for(var a = a.e(), a = o(8 - a.length).concat(a), b = 0;8 > b;b++) {
    var c = a[b];
    this.buffer[this.position + b] = 0 <= c ? c : 255 + c + 1
  }
  this.position += 8
};
m.prototype.readString = function() {
  return this.buffer.toString("utf8", this.position, this.position += this.readInt())
};
m.prototype.writeString = function(a) {
  var a = new Buffer(a, "utf8"), b = a.length;
  this.writeInt(b);
  for(var c = 0, e = this.position;c < b;c++) {
    this.buffer[e + c] = a[c]
  }
  this.position += b
};
m.prototype.readDate = function() {
  var a = this.readLongBytes().m(p).toString();
  return new Date(parseInt(a))
};
m.prototype.writeDate = function(a) {
  if(a instanceof Date) {
    a = Date.getTime()
  }else {
    if("number" !== typeof a) {
      throw Error("Date type must be a Date or number");
    }
  }
  this.writeLong((new g(a.toString())).multiply(p))
};
m.prototype.readDecimal = function() {
  for(var a = [], b = 0;16 > b;b++) {
    a.push(this.buffer[this.position + b])
  }
  this.position += 16;
  a = (new g(a)).toString();
  "-170141183460469231731687303715884105728" === a ? a = null : 12 >= a.length ? (a = o(12 - a.length).join("") + a, a = "0." + a) : (a = a.slice(0, -12) + "." + a.slice(-12), a = a.replace(/0+$/, ""));
  return a
};
m.prototype.writeDecimal = function(a) {
  null == a && (a = "-170141183460469231731687303715884105728");
  "number" === typeof a && (a = a.toString());
  a = a.split(".");
  1 == a.length ? a.push("000000000000") : a[1] += o(12 - a[1].length).join("");
  a = (new g(a.join(""))).e();
  if(0 < a[0]) {
    a = o(16 - a.length).concat(a)
  }else {
    for(var b = 16 - a.length, c = Array(b), e = 0;e < b;e++) {
      c[e] = 1
    }
    a = c.concat(a)
  }
  for(b = 0;16 > b;b++) {
    c = a[b], this.buffer[this.position + b] = 0 <= c ? c : 255 + c + 1
  }
  this.position += 16
};
m.prototype.readVarbinary = function() {
  var a = this.readInt(), b = this.buffer.slice(this.position, this.position + a);
  this.position += a;
  return b
};
m.prototype.writeVarbinary = function(a) {
  this.writeInt(a.length);
  a.copy(this.buffer, this.position);
  this.position += a.length
};
m.prototype.readNull = function() {
  return null
};
m.prototype.writeNull = function() {
};
m.prototype.readArray = function(a, b) {
  for(var a = q[this.readByte()], c = "byte" == a ? this.readInt() : this.readShort(), e = r[a], b = Array(c), d = 0;d < c;d++) {
    b[d] = this[e]()
  }
  return b
};
m.prototype.writeArray = function(a, b) {
  var c = b.length, e;
  if(e = a.match(s)) {
    this.writeByte(t.d);
    this.writeShort(c);
    var d = e[1];
    for(e = 0;e < c;e++) {
      this.writeArray(d, b[e])
    }
  }else {
    this.writeByte(t[a]);
    "byte" == a ? this.writeInt(c) : this.writeShort(c);
    d = u[a];
    for(e = 0;e < c;e++) {
      this[d](b[e])
    }
  }
};
m.prototype.readVoltTable = function() {
  this.readInt();
  this.readInt();
  for(var a = this.readByte(), b = this.readShort(), c = Array(b), e = Array(b), d = 0;d < b;d++) {
    var f = this.readByte(), f = q[f];
    c[d] = f;
    e[d] = r[f]
  }
  f = Array(b);
  for(d = 0;d < b;d++) {
    f[d] = this.readString()
  }
  for(var h = this.readInt(), k = Array(h), d = 0;d < h;d++) {
    this.readInt();
    for(var w = {}, n = 0;n < b;n++) {
      w[f[n]] = this[e[n]]()
    }
    k[d] = w
  }
  k.status = a;
  k.j = f;
  k.k = c;
  return k
};
m.prototype.readException = function(a) {
  var b = this.readByte();
  this.readBinary(a - 1);
  return 1 == b ? Error("EEException") : 2 == b ? Error("SQLException") : 3 == b ? Error("ConstraintFailureException") : Error("An exception has occurred")
};
m.prototype.writeParameterSet = function(a, b) {
  var c = b.length, e;
  this.writeShort(c);
  for(var d = 0;d < c;d++) {
    var f = a[d], h = b[d];
    (e = f.match(s)) ? (e = e[1], this.writeByte(t.d), this.writeArray(e, h)) : (this.writeByte(t[f]), this[u[f]](h))
  }
};
m.readInt = function(a, b) {
  void 0 == b && (b = 0);
  return j(a, b)
};
exports.Parser = m;
var s = /array\[(.*)\]/, q = {"-99":"array", 1:"null", 3:"byte", 4:"short", 5:"int", 6:"long", 8:"double", 9:"string", 11:"date", 22:"decimal", 25:"varbinary"}, t = {array:-99, "null":1, "byte":3, tinyint:3, "short":4, smallint:4, "int":5, integer:5, "long":6, bigint:6, "double":8, "float":8, string:9, date:11, timestamp:11, decimal:22, varbinary:25}, r = {array:"readArray", "null":"readNull", "byte":"readByte", tinyint:"readByte", "short":"readShort", smallint:"readShort", "int":"readInt", integer:"readInt", 
"long":"readLong", bigint:"readLong", "double":"readDouble", "float":"readDouble", string:"readString", date:"readDate", timestamp:"readDate", decimal:"readDecimal", varbinary:"readVarbinary"}, u = {array:"writeArray", "null":"wrteNull", "byte":"wrteByte", tinyint:"writeByte", "short":"writeShort", smallint:"writeShort", "int":"writeInt", integer:"writeInt", "long":"writeLong", bigint:"writeLong", "double":"writeDouble", "float":"writeDouble", string:"writeString", date:"writeDate", timestamp:"writeDate", 
decimal:"writeDecimal", varbinary:"writeVarbinary"}, p = new g("1000");
function o(a) {
  for(var b = Array(a), c = 0;c < a;c++) {
    b[c] = 0
  }
  return b
}
exports.Parser = m;
var v = require("util");
function x(a) {
  this.type = y.c;
  this.error = !1;
  m.call(this, a);
  a ? this.readHeader() : (this.writeInt(0), this.writeByte(0))
}
x.prototype = Object.create(m.prototype);
x.prototype.readHeader = function() {
  this.length = this.readInt();
  this.protocol = this.readByte()
};
x.prototype.writeHeader = function() {
  var a = this.position;
  this.position = 0;
  this.writeInt(this.buffer.length - 4);
  this.writeByte(0);
  this.position = a
};
x.prototype.toBuffer = function() {
  this.writeHeader();
  return new Buffer(this.buffer)
};
x.readInt = function(a, b) {
  return m.readInt(a, b)
};
LoginMessage = function(a) {
  x.call(this, a);
  this.type = y.a;
  this.status = this.readByte();
  this.error = 0 === this.status ? !1 : !0;
  !1 === this.error && (this.serverId = this.readInt(), this.connectionId = this.readLong(), this.clusterStartTimestamp = new Date(parseInt(this.readLong().toString())), this.leaderIP = this.readByte() + "." + this.readByte() + "." + this.readByte() + "." + this.readByte(), this.build = this.readString())
};
v.inherits(LoginMessage, x);
LoginMessage.prototype.toString = function() {
  return{length:this.length, protocol:this.protocol, status:this.status, error:this.error, s:this.serverId, l:this.connectionId, i:this.clusterStartTimestamp, q:this.leaderIP, h:this.build}
};
QueryMessage = function(a) {
  x.call(this, a);
  this.type = y.b;
  this.uid = this.readBinary(8).toString();
  this.fieldsPresent = this.readByte();
  this.status = this.readByte();
  this.statusString = z[this.status];
  this.fieldsPresent & A && (this.statusString = this.readString());
  this.appStatus = this.readByte();
  this.appStatusString = "";
  this.fieldsPresent & B && (this.appStatusString = this.readString());
  this.exception;
  this.exceptionLength = this.readInt();
  if(this.fieldsPresent & C) {
    this.exception = this.readException(1)
  }else {
    a = this.readShort();
    0 != a && (a = 1);
    this.table = Array(a);
    for(var b = 0;b < a;b++) {
      this.table[b] = this.readVoltTable()
    }
  }
};
v.inherits(QueryMessage, x);
QueryMessage.prototype.toString = function() {
  return{length:this.length, protocol:this.protocol, status:this.status, error:this.error, u:this.uid, p:this.fieldsPresent, status:this.status, t:this.statusString, f:this.appStatus, g:this.appStatusString, n:this.exception, o:this.exceptionLength, r:this.results}
};
var y = {c:-1, a:1, b:2}, A = 32, C = 64, B = 128, z = {1:"SUCCESS", "-1":"USER_ABORT", "-2":"GRACEFUL_FAILURE", "-3":"UNEXPECTED_FAILURE", "-4":"CONNECTION_LOST"};
exports.MESSAGE_TYPE = y;
exports.Message = x;
exports.LoginMessage = LoginMessage;
exports.QueryMessage = QueryMessage;

