function d(a) {
  throw a;
}
var h = void 0, i = !0, k = require("bignumber").BigInteger;
function m(a, b) {
  "number" != typeof a && d(new (Error("cannot write a non-number as a number")));
  0 > a && d(Error("specified a negative value for writing an unsigned value"));
  a > b && d(Error("value is larger than maximum value for type"));
  Math.floor(a) !== a && d(Error("value has a fractional component"));
  return a
}
function n(a, b, c) {
  a === h && d(Error("missing value"));
  b === h && d(Error("missing buffer"));
  c === h && d(Error("missing offset"));
  c >= b.length && b instanceof Buffer && d(Error("Trying to write beyond buffer length"));
  a = m(a, 255);
  b[c] = a
}
function o(a, b, c) {
  a === h && d(Error("missing value"));
  b === h && d(Error("missing buffer"));
  c === h && d(Error("missing offset"));
  c + 1 >= b.length && b instanceof Buffer && d(Error("Trying to write beyond buffer length"));
  a = m(a, 65535);
  b[c] = (a & 65280) >>> 8;
  b[c + 1] = a & 255
}
function q(a, b, c) {
  a === h && d(Error("missing value"));
  b === h && d(Error("missing buffer"));
  c === h && d(Error("missing offset"));
  c + 3 >= b.length && b instanceof Buffer && d(Error("Trying to write beyond buffer length"));
  a = m(a, 4294967295);
  b[c] = (a - (a & 16777215)) / Math.pow(2, 24);
  b[c + 1] = a >>> 16 & 255;
  b[c + 2] = a >>> 8 & 255;
  b[c + 3] = a & 255
}
function r(a, b, c) {
  "number" != typeof a && d(new (Error("cannot write a non-number as a number")));
  a > b && d(Error("value larger than maximum allowed value"));
  a < c && d(Error("value smaller than minimum allowed value"));
  Math.floor(a) !== a && d(Error("value has a fractional component"));
  return a
}
require("assert");
function s(a, b) {
  a === h && d(Error("missing buffer"));
  b === h && d(Error("missing offset"));
  b >= a.length && d(Error("Trying to read beyond buffer length"));
  return a[b]
}
function t(a, b) {
  var c;
  a === h && d(Error("missing buffer"));
  b === h && d(Error("missing offset"));
  b + 3 >= a.length && d(Error("Trying to read beyond buffer length"));
  c = 0;
  a === h && d(Error("missing buffer"));
  b === h && d(Error("missing offset"));
  b + 3 >= a.length && d(Error("Trying to read beyond buffer length"));
  c = a[b + 1] << 16;
  c |= a[b + 2] << 8;
  c |= a[b + 3];
  c = 16777216 * a[b] + c;
  return!(c & 2147483648) ? c : -1 * (4294967295 - c + 1)
}
function u(a, b, c) {
  a === h && d(Error("missing value"));
  b === h && d(Error("missing buffer"));
  c === h && d(Error("missing offset"));
  c >= b.length && b instanceof Buffer && d(Error("Trying to write beyond buffer length"));
  a = r(a, 127, -240);
  0 <= a ? n(a, b, c) : n(255 + a + 1, b, c)
}
function v(a, b) {
  var c = [], e, f, g, j;
  a === h && d(Error("missing buffer"));
  b === h && d(Error("missing offset"));
  b + 7 >= a.length && d(Error("Trying to read beyond buffer length"));
  c[0] = a[b];
  c[1] = a[b + 1];
  c[2] = a[b + 2];
  c[3] = a[b + 3];
  c[4] = a[b + 4];
  c[5] = a[b + 5];
  c[6] = a[b + 6];
  c[7] = a[b + 7];
  e = c[0] & 128;
  f = (c[0] & 127) << 4;
  f |= (c[1] & 240) >>> 4;
  j = c[7];
  j |= c[6] << 8;
  j |= c[5] << 16;
  g = c[4];
  g |= c[3] << 8;
  g |= c[2] << 16;
  g |= (c[1] & 15) << 24;
  g *= Math.pow(2, 24);
  g += j;
  if(!e && 2047 == f && 0 === g) {
    return Number.POSITIVE_INFINITY
  }
  if(e && 2047 == f && 0 === g) {
    return Number.NEGATIVE_INFINITY
  }
  if(2047 == f && 0 !== g) {
    return Number.NaN
  }
  if(0 === f && 0 === g) {
    return 0
  }
  f -= 1023;
  -1023 == f ? (f++, c = 0) : c = 1;
  c = (c + g * Math.pow(2, -52)) * Math.pow(2, f);
  e && (c *= -1);
  return c
}
function w(a) {
  this.buffer = a || [];
  this.position = 0
}
w.prototype.readBinary = function(a) {
  return this.buffer.slice(this.position, this.position += a)
};
w.prototype.writeBinary = function(a) {
  for(var b = 0, c = a.length, e = this.position;b < c;b++) {
    this.buffer[e + b] = a[b]
  }
  this.position += c
};
w.prototype.readByte = function() {
  var a = this.buffer, b = this.position++;
  a === h && d(Error("missing buffer"));
  b === h && d(Error("missing offset"));
  b >= a.length && d(Error("Trying to read beyond buffer length"));
  return!(a[b] & 128) ? a[b] : -1 * (255 - a[b] + 1)
};
w.prototype.writeByte = function(a) {
  u(a, this.buffer, this.position++)
};
w.prototype.readShort = function() {
  var a = this.buffer, b = (this.position += 2) - 2;
  a === h && d(Error("missing buffer"));
  b === h && d(Error("missing offset"));
  b + 1 >= a.length && d(Error("Trying to read beyond buffer length"));
  var c = 0;
  a === h && d(Error("missing buffer"));
  b === h && d(Error("missing offset"));
  b + 1 >= a.length && d(Error("Trying to read beyond buffer length"));
  c = a[b] << 8;
  a = c |= a[b + 1];
  return!(a & 32768) ? a : -1 * (65535 - a + 1)
};
w.prototype.writeShort = function(a) {
  var b = this.buffer, c = (this.position += 2) - 2;
  a === h && d(Error("missing value"));
  b === h && d(Error("missing buffer"));
  c === h && d(Error("missing offset"));
  c + 1 >= b.length && b instanceof Buffer && d(Error("Trying to write beyond buffer length"));
  a = r(a, 32767, -61440);
  0 <= a ? o(a, b, c) : o(65535 + a + 1, b, c)
};
w.prototype.readInt = function() {
  return t(this.buffer, (this.position += 4) - 4)
};
w.prototype.writeInt = function(a) {
  var b = this.buffer, c = (this.position += 4) - 4;
  a === h && d(Error("missing value"));
  b === h && d(Error("missing buffer"));
  c === h && d(Error("missing offset"));
  c + 3 >= b.length && b instanceof Buffer && d(Error("Trying to write beyond buffer length"));
  a = r(a, 2147483647, -4026531840);
  0 <= a ? q(a, b, c) : q(4294967295 + a + 1, b, c)
};
w.prototype.readDouble = function() {
  return v(this.buffer, (this.position += 8) - 8)
};
w.prototype.writeDouble = function(a) {
  var b = a, a = this.buffer, c = (this.position += 8) - 8, e, f, g, j = [];
  b === h && d(Error("missing value"));
  a === h && d(Error("missing buffer"));
  c === h && d(Error("missing offset"));
  c + 7 >= a.length && a instanceof Buffer && d(Error("Trying to write beyond buffer length"));
  isNaN(b) ? (e = 0, f = 2047, b = 23) : b == Number.POSITIVE_INFINITY ? (e = 0, f = 2047, b = 0) : b == Number.NEGATIVE_INFINITY ? (e = 1, f = 2047, b = 0) : (0 > b ? (e = 1, b = Math.abs(b)) : e = 0, g = Math.floor(Math.log(b) / Math.log(2)), 2.225073858507201E-308 >= b || -1023 >= g ? (f = 0, b = b * Math.pow(2, 1023) * Math.pow(2, 51)) : (1023 < g && (g = 1023), f = 1023 + g, b *= Math.pow(2, -g), b *= Math.pow(2, 52)), b %= Math.pow(2, 52));
  j[7] = b & 255;
  j[6] = b >>> 8 & 255;
  j[5] = b >>> 16 & 255;
  b = (b - (b & 16777215)) / Math.pow(2, 24);
  j[4] = b & 255;
  j[3] = b >>> 8 & 255;
  j[2] = b >>> 16 & 255;
  j[1] = (f & 15) << 4 | b >>> 24;
  j[0] = e << 7 | (f & 2032) >>> 4;
  a[c] = j[0];
  a[c + 1] = j[1];
  a[c + 2] = j[2];
  a[c + 3] = j[3];
  a[c + 4] = j[4];
  a[c + 5] = j[5];
  a[c + 6] = j[6];
  a[c + 7] = j[7]
};
w.prototype.readLongBytes = function() {
  for(var a = [], b = 0;8 > b;b++) {
    a.push(s(this.buffer, this.position + b))
  }
  this.position += 8;
  return new k(a)
};
w.prototype.readLong = function() {
  return this.readLongBytes()[0]
};
w.prototype.writeLong = function(a) {
  "number" === typeof a && (a = new k(a.toString()));
  a instanceof k || d(Error("Long type must be a BigInteger or Number"));
  for(var a = a.b(), a = x(8 - a.length).concat(a), b = 0;8 > b;b++) {
    u(a[b], this.buffer, this.position + b)
  }
  this.position += 8
};
w.prototype.readString = function() {
  return this.buffer.toString("utf8", this.position, this.position += this.readInt())
};
w.prototype.writeString = function(a) {
  var a = new Buffer(a, "utf8"), b = a.length;
  this.writeInt(b);
  for(var c = 0, e = this.position;c < b;c++) {
    this.buffer[e + c] = a[c]
  }
  this.position += b
};
w.prototype.readDate = function() {
  var a = this.readLongBytes().e(y).toString();
  return new Date(parseInt(a))
};
w.prototype.writeDate = function(a) {
  a instanceof Date ? a = Date.getTime() : "number" !== typeof a && d(Error("Date type must be a Date or number"));
  this.writeLong((new k(a.toString())).multiply(y))
};
w.prototype.readDecimal = function() {
  for(var a = [], b = 0;16 > b;b++) {
    a.push(s(this.buffer, this.position + b))
  }
  this.position += 16;
  a = (new k(a)).toString();
  "-170141183460469231731687303715884105728" === a ? a = null : 12 >= a.length ? (a = x(12 - a.length).join("") + a, a = "0." + a) : (a = a.slice(0, -12) + "." + a.slice(-12), a = a.replace(/0+$/, ""));
  return a
};
w.prototype.writeDecimal = function(a) {
  null == a && (a = "-170141183460469231731687303715884105728");
  "number" === typeof a && (a = a.toString());
  ("string" != typeof a || !/^-?\d*\.?\d*$/.test(a)) && d(Error("Decimal type must be a numerical string or Number:" + a));
  a = a.split(".");
  1 == a.length ? a.push("000000000000") : a[1] += x(12 - a[1].length).join("");
  a = (new k(a.join(""))).b();
  if(0 < a[0]) {
    a = x(16 - a.length).concat(a)
  }else {
    for(var b = 16 - a.length, c = Array(b), e = 0;e < b;e++) {
      c[e] = 1
    }
    a = c.concat(a)
  }
  for(b = 0;16 > b;b++) {
    u(a[b], this.buffer, this.position + b)
  }
  this.position += 16
};
w.prototype.readVarbinary = function() {
  var a = this.readInt(), b = this.buffer.slice(this.position, this.position + a);
  this.position += a;
  return b
};
w.prototype.writeVarbinary = function(a) {
  this.writeInt(a.length);
  a.copy(this.buffer, this.position);
  this.position += a.length
};
w.prototype.readNull = function() {
  return null
};
w.prototype.writeNull = function() {
};
w.prototype.readArray = function(a, b) {
  a = z[this.readByte()];
  a == h && d(Error("Unsupported type, update driver"));
  for(var c = "byte" == a ? this.readInt() : this.readShort(), e = A[a], b = Array(c), f = 0;f < c;f++) {
    b[f] = this[e]()
  }
  return b
};
w.prototype.writeArray = function(a, b) {
  "array" != a.slice(0, 5) && !B.hasOwnProperty(a) && d(Error("Type must be one of: array, null tinyint, smallint, integer, bigint, float, string, timestamp, decimal"));
  b instanceof Array || d(Error("Array value must be an Array"));
  var c = b.length, e;
  if(e = a.match(C)) {
    this.writeByte(B.a);
    this.writeShort(c);
    var f = e[1];
    for(e = 0;e < c;e++) {
      this.writeArray(f, b[e])
    }
  }else {
    this.writeByte(B[a]);
    "byte" == a ? this.writeInt(c) : this.writeShort(c);
    f = E[a];
    for(e = 0;e < c;e++) {
      this[f](b[e])
    }
  }
};
w.prototype.readVoltTable = function() {
  this.readInt();
  this.readInt();
  for(var a = this.readByte(), b = this.readShort(), c = Array(b), e = Array(b), f = 0;f < b;f++) {
    var g = this.readByte(), g = z[g];
    c[f] = g;
    e[f] = A[g]
  }
  g = Array(b);
  for(f = 0;f < b;f++) {
    g[f] = this.readString()
  }
  for(var j = this.readInt(), l = Array(j), f = 0;f < j;f++) {
    this.readInt();
    for(var D = {}, p = 0;p < b;p++) {
      D[g[p]] = this[e[p]]()
    }
    l[f] = D
  }
  l.status = a;
  l.c = g;
  l.d = c;
  return l
};
w.prototype.readException = function(a) {
  0 == a && Error("An exception has occurred");
  var b = this.readByte();
  this.readBinary(a - 1);
  return 1 == b ? Error("EEException") : 2 == b ? Error("SQLException") : 3 == b ? Error("ConstraintFailureException") : Error("An exception has occurred")
};
w.prototype.writeParameterSet = function(a, b) {
  a.length != b.length && d(Error("The number of parameters do not match the number of types defined in the definition."));
  var c = b.length, e;
  this.writeShort(c);
  for(var f = 0;f < c;f++) {
    var g = a[f], j = b[f];
    e = g;
    var l = j;
    "array" == e && d(Error("Type array must have a subtype. E.g. array[string]"));
    "array" != e.slice(0, 5) && !B.hasOwnProperty(e) && d(Error("Type must be one of: array, null tinyint, smallint, integer, bigint, float, string, timestamp, decimal"));
    "numeric" === typeof l && !F[e] && d(Error("Providing a numeric type for a non-numeric field. " + l + " can not be a " + e));
    "string" === typeof l && !G[e] && d(Error("Providing a string type for a non-string field. " + l + " can not be a " + e));
    "object" === typeof l && !(l instanceof Array) && d(Error("Cannot provide custom objects as procedure parameters"));
    l instanceof Array && "array" != e.slice(0, 5) && d(Error("Providing an array type for a non-array field. " + l + " can not be a " + e));
    "array" == e.slice(0, 5) && !(l instanceof Array) && d(Error("Providing a non-array value for an array field. " + l + " can not be a " + e));
    l instanceof k && !H[e] && d(Error("Providing a BigInteger type for a non-bigint field. " + l + " can not be a " + e));
    (e = g.match(C)) ? (g = e[1], this.writeByte(B.a), this.writeArray(g, j)) : (this.writeByte(B[g]), this[E[g]](j))
  }
};
w.readInt = function(a, b) {
  b == h && (b = 0);
  return t(a, b)
};
exports.Parser = w;
var C = /array\[(.*)\]/, z = {"-99":"array", 1:"null", 3:"byte", 4:"short", 5:"int", 6:"long", 8:"double", 9:"string", 11:"date", 22:"decimal", 25:"varbinary"}, B = {array:-99, "null":1, "byte":3, tinyint:3, "short":4, smallint:4, "int":5, integer:5, "long":6, bigint:6, "double":8, "float":8, string:9, date:11, timestamp:11, decimal:22, varbinary:25}, A = {array:"readArray", "null":"readNull", "byte":"readByte", tinyint:"readByte", "short":"readShort", smallint:"readShort", "int":"readInt", integer:"readInt", 
"long":"readLong", bigint:"readLong", "double":"readDouble", "float":"readDouble", string:"readString", date:"readDate", timestamp:"readDate", decimal:"readDecimal", varbinary:"readVarbinary"}, E = {array:"writeArray", "null":"wrteNull", "byte":"wrteByte", tinyint:"writeByte", "short":"writeShort", smallint:"writeShort", "int":"writeInt", integer:"writeInt", "long":"writeLong", bigint:"writeLong", "double":"writeDouble", "float":"writeDouble", string:"writeString", date:"writeDate", timestamp:"writeDate", 
decimal:"writeDecimal", varbinary:"writeVarbinary"}, F = {"byte":i, tinyint:i, "short":i, smallint:i, "int":i, integer:i, "long":i, bigint:i, "double":i, "float":i, date:i, timestamp:i, decimal:i, varbinary:i}, G = {string:i, decimal:i}, H = {"long":i, bigint:i}, y = new k("1000");
function x(a) {
  for(var b = Array(a), c = 0;c < a;c++) {
    b[c] = 0
  }
  return b
}
exports.Parser = w;

