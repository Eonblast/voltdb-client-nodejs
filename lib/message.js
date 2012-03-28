var f = require("bignumber").BigInteger;
function i(a, b, c) {
  b = 0;
  b = a[c] << 8;
  return b |= a[c + 1]
}
function k(a, b, c) {
  b = 0;
  b = a[c + 1] << 16;
  b |= a[c + 2] << 8;
  b |= a[c + 3];
  return b = 16777216 * a[c] + b
}
function l(a, b, c, d) {
  c[d] = (a & 65280) >>> 8;
  c[d + 1] = a & 255
}
function n(a, b, c, d) {
  c[d] = (a - (a & 16777215)) / Math.pow(2, 24);
  c[d + 1] = a >>> 16 & 255;
  c[d + 2] = a >>> 8 & 255;
  c[d + 3] = a & 255
}
var o = i, p = k, q = l, s = n;
function t(a, b, c) {
  return!(a[c] & 128) ? a[c] : -1 * (255 - a[c] + 1)
}
function u(a, b, c) {
  a = i(a, 0, c);
  return!(a & 32768) ? a : -1 * (65535 - a + 1)
}
function v(a, b, c) {
  a = k(a, 0, c);
  return!(a & 2147483648) ? a : -1 * (4294967295 - a + 1)
}
function w(a, b, c, d) {
  c[d] = 0 <= a ? a : 255 + a + 1
}
function x(a, b, c, d) {
  0 <= a ? l(a, 0, c, d) : l(65535 + a + 1, 0, c, d)
}
function y(a, b, c, d) {
  0 <= a ? n(a, 0, c, d) : n(4294967295 + a + 1, 0, c, d)
}
function z(a, b) {
  var c = [], d, e, g;
  c[0] = a[b];
  c[1] = a[b + 1];
  c[2] = a[b + 2];
  c[3] = a[b + 3];
  d = c[0] & 128;
  e = (c[0] & 127) << 1;
  e |= (c[1] & 128) >>> 7;
  g = (c[1] & 127) << 16;
  g |= c[2] << 8;
  g |= c[3];
  if(!d && 255 == e && 0 === g) {
    return Number.POSITIVE_INFINITY
  }
  if(d && 255 == e && 0 === g) {
    return Number.NEGATIVE_INFINITY
  }
  if(255 == e && 0 !== g) {
    return Number.NaN
  }
  if(0 === e && 0 === g) {
    return 0
  }
  e -= 127;
  -127 == e ? (e++, c = 0) : c = 1;
  c = (c + g * Math.pow(2, -23)) * Math.pow(2, e);
  d && (c *= -1);
  return c
}
function A(a, b, c) {
  var b = [], d, e;
  b[0] = a[c];
  b[1] = a[c + 1];
  b[2] = a[c + 2];
  b[3] = a[c + 3];
  b[4] = a[c + 4];
  b[5] = a[c + 5];
  b[6] = a[c + 6];
  b[7] = a[c + 7];
  a = b[0] & 128;
  c = (b[0] & 127) << 4;
  c |= (b[1] & 240) >>> 4;
  e = b[7];
  e |= b[6] << 8;
  e |= b[5] << 16;
  d = b[4];
  d |= b[3] << 8;
  d |= b[2] << 16;
  d |= (b[1] & 15) << 24;
  d *= Math.pow(2, 24);
  d += e;
  if(!a && 2047 == c && 0 === d) {
    return Number.POSITIVE_INFINITY
  }
  if(a && 2047 == c && 0 === d) {
    return Number.NEGATIVE_INFINITY
  }
  if(2047 == c && 0 !== d) {
    return Number.NaN
  }
  if(0 === c && 0 === d) {
    return 0
  }
  c -= 1023;
  -1023 == c ? (c++, b = 0) : b = 1;
  b = (b + d * Math.pow(2, -52)) * Math.pow(2, c);
  a && (b *= -1);
  return b
}
function B(a, b, c, d) {
  var e, g, h = [];
  isNaN(a) ? (b = 0, e = 2047, a = 23) : a == Number.POSITIVE_INFINITY ? (b = 0, e = 2047, a = 0) : a == Number.NEGATIVE_INFINITY ? (b = 1, e = 2047, a = 0) : (0 > a ? (b = 1, a = Math.abs(a)) : b = 0, g = Math.floor(Math.log(a) / Math.log(2)), 2.225073858507201E-308 >= a || -1023 >= g ? (e = 0, a = a * Math.pow(2, 1023) * Math.pow(2, 51)) : (1023 < g && (g = 1023), e = 1023 + g, a *= Math.pow(2, -g), a *= Math.pow(2, 52)), a %= Math.pow(2, 52));
  h[7] = a & 255;
  h[6] = a >>> 8 & 255;
  h[5] = a >>> 16 & 255;
  a = (a - (a & 16777215)) / Math.pow(2, 24);
  h[4] = a & 255;
  h[3] = a >>> 8 & 255;
  h[2] = a >>> 16 & 255;
  h[1] = (e & 15) << 4 | a >>> 24;
  h[0] = b << 7 | (e & 2032) >>> 4;
  c[d] = h[0];
  c[d + 1] = h[1];
  c[d + 2] = h[2];
  c[d + 3] = h[3];
  c[d + 4] = h[4];
  c[d + 5] = h[5];
  c[d + 6] = h[6];
  c[d + 7] = h[7]
}
var C = require("assert"), K = {uint8_t:{a:D, write:E}, uint16_t:{a:F, write:G}, uint32_t:{a:H, write:I}, int8_t:{a:J, write:aa}, int16_t:{a:ba, write:ca}, int32_t:{a:da, write:ea}, "float":{a:fa, write:ga}, "double":{a:ha, write:ia}, "char":{a:ja, write:ka}, "char[]":{a:la, write:ma}};
function D(a, b, c) {
  return{value:b[c], size:1}
}
function F(a, b, c) {
  return{value:o(b, a, c), size:2}
}
function H(a, b, c) {
  return{value:p(b, a, c), size:4}
}
function J(a, b, c) {
  return{value:t(b, 0, c), size:1}
}
function ba(a, b, c) {
  return{value:u(b, 0, c), size:2}
}
function da(a, b, c) {
  return{value:v(b, 0, c), size:4}
}
function fa(a, b, c) {
  return{value:z(b, c), size:4}
}
function ha(a, b, c) {
  return{value:A(b, 0, c), size:8}
}
function ja(a, b, c) {
  a = new Buffer(1);
  a[0] = b[c];
  return{value:a, size:1}
}
function la(a, b, c, d) {
  for(var e = new Buffer(a), b = 0;b < a;b++) {
    e[b] = c[d + b]
  }
  return{value:e, size:a}
}
function E(a, b, c, d) {
  c[d] = a;
  return 1
}
function G(a, b, c, d) {
  q(a, b, c, d);
  return 2
}
function I(a, b, c, d) {
  s(a, b, c, d);
  return 4
}
function aa(a, b, c, d) {
  w(a, 0, c, d);
  return 1
}
function ca(a, b, c, d) {
  x(a, 0, c, d);
  return 2
}
function ea(a, b, c, d) {
  y(a, 0, c, d);
  return 4
}
function ga(a, b, c, d) {
  var e = a, g, h = [];
  isNaN(e) ? (a = 0, b = 255, e = 23) : e == Number.POSITIVE_INFINITY ? (a = 0, b = 255, e = 0) : e == Number.NEGATIVE_INFINITY ? (a = 1, b = 255, e = 0) : (0 > e ? (a = 1, e = Math.abs(e)) : a = 0, g = Math.floor(Math.log(e) / Math.log(2)), -127 >= g) ? (b = 0, e = e * Math.pow(2, 149) & 8388607) : (b = 127 + g, e *= Math.pow(2, 23 - g), e &= 8388607);
  h[0] = a << 7 | (b & 254) >>> 1;
  h[1] = (b & 1) << 7 | (e & 8323072) >>> 16;
  h[2] = (e & 65280) >>> 8;
  h[3] = e & 255;
  c[d] = h[0];
  c[d + 1] = h[1];
  c[d + 2] = h[2];
  c[d + 3] = h[3];
  return 4
}
function ia(a, b, c, d) {
  B(a, 0, c, d);
  return 8
}
function ka() {
  return 1
}
function ma(a, b, c, d, e) {
  for(c = 0;c < a.length && c < b;c++) {
    d[e + c] = a[c]
  }
  for(;c < b;c++) {
  }
  return b
}
function L(a) {
  var b, c;
  c = a.lastIndexOf("]");
  if(-1 == c) {
    return{type:a}
  }
  b = a.lastIndexOf("[");
  return{type:a.substring(0, b), t:a.substring(b + 1, c)}
}
function M(a) {
  this.endian = a.endian;
  var a = {}, b;
  for(b in K) {
    a[b] = K[b]
  }
  this.types = a
}
M.prototype.setEndian = M.prototype.U = function(a) {
  this.endian = a
};
M.prototype.getEndian = M.prototype.r = function() {
  return this.endian
};
M.prototype.typedef = M.prototype.X = function(a, b) {
  this.types[a] = b
};
M.prototype.lstypes = M.prototype.u = function() {
  var a, b = {};
  for(a in this.types) {
    a in K || (b[a] = this.types[a])
  }
  return b
};
function N(a, b) {
  for(var c = "", d = L(a);void 0 !== d.len;) {
    c = isNaN(parseInt(d.len, 10)) ? "[" + b[d.len] + "]" + c : "[" + d.len + "]" + c, d = L(d.type)
  }
  return c = d.type + c
}
M.prototype.resolveTypedef = M.prototype.R = function(a, b, c, d, e) {
  console.log(a);
  C.v(a in this.types);
  console.log(a + ":" + this.types[a]);
  if("string" == typeof this.types[a]) {
    a = L(this.types[a]);
    if("read" == b) {
      return this.readEntry(a, c, d)
    }
    if("write" == b) {
      return this.writeEntry(e, a, c, d)
    }
    throw Error("invalid dispatch type to resolveTypedef");
  }
  if("read" == b) {
    return this.readStruct(this.types[a], c, d)
  }
  if("write" == b) {
    return this.readStruct(e, this.types[a], c, d)
  }
  throw Error("invalid dispatch type to resolveTypedef");
};
M.prototype.readEntry = M.prototype.F = function(a, b, c) {
  var d;
  void 0 !== a.len ? (d = parseInt(a.len, 10), a = "char" == a.type ? K["char[]"].read(d, this.endian, b, c) : this.readArray(a.type, d, b, c)) : a = a.type in K ? K[a.type].read(this.endian, b, c) : this.resolveTypedef(a.type, "read", b, c);
  return a
};
M.prototype.readArray = M.prototype.f = function(a, b, c, d) {
  var e, g, h = d, j = Array(b);
  g = L(a);
  for(a = 0;a < b;a++) {
    e = this.readEntry(g, c, d), d += e.size, j[a] = e.value
  }
  return{value:j, size:d - h}
};
M.prototype.readStruct = M.prototype.O = function(a, b, c) {
  var d, e, g, h, j = c, m = {};
  for(e = 0;e < a.length;e++) {
    h = Object.keys(a[e])[0], g = a[e][h], d = L(N(g.type, m)), "offset" in g && (c = j + g.offset), d = this.readEntry(d, b, c), c += d.size, m[h] = d.value
  }
  return{Z:m, size:c - j}
};
M.prototype.readData = M.prototype.A = function(a, b, c) {
  return this.readStruct(a, b, c).values
};
M.prototype.writeArray = M.prototype.g = function(a, b, c, d, e) {
  var g, h = e;
  g = L(b);
  for(b = 0;b < c;b++) {
    e += this.writeEntry(a[b], g, d, e)
  }
  return e - h
};
M.prototype.writeEntry = M.prototype.ea = function(a, b, c, d) {
  var e;
  void 0 !== b.len ? (e = parseInt(b.len, 10), a = "char" == b.type ? K["char[]"].write(a, e, this.endian, c, d) : this.writeArray(a, b.type, e, c, d)) : a = b.type in K ? K[b.type].write(a, this.endian, c, d) : this.resolveTypedef(b.type, "write", c, d, a);
  return a
};
M.prototype.writeStruct = M.prototype.ma = function(a, b, c) {
  var d, e, g, h, j = c, m = {};
  for(d = 0;d < a.length;d++) {
    h = Object.keys(a[d])[0], e = a[d][h], g = L(N(e.type, m)), "offset" in e && (c = j + e.offset), c += this.writeEntry(e.value, g, b, c), m[h] = e.value
  }
};
M.prototype.write = M.prototype.write = function(a, b, c) {
  this.writeStruct(a, b, c)
};
var na = t, oa = u, O = v, P = w, pa = x, qa = y, ra = A, sa = B;
function Q(a) {
  this.buffer = a || [];
  this.position = 0
}
Q.prototype.readBinary = Q.prototype.w = function(a) {
  return this.buffer.slice(this.position, this.position += a)
};
Q.prototype.writeBinary = Q.prototype.$ = function(a) {
  for(var b = 0, c = a.length, d = this.position;b < c;b++) {
    this.buffer[d + b] = a[b]
  }
  this.position += c
};
Q.prototype.readByte = Q.prototype.z = function() {
  return na(this.buffer, "big", this.position++)
};
Q.prototype.writeByte = Q.prototype.aa = function(a) {
  P(a, "big", this.buffer, this.position++)
};
Q.prototype.readShort = Q.prototype.M = function() {
  return oa(this.buffer, "big", (this.position += 2) - 2)
};
Q.prototype.writeShort = Q.prototype.ka = function(a) {
  pa(a, "big", this.buffer, (this.position += 2) - 2)
};
Q.prototype.readInt = Q.prototype.I = function() {
  return O(this.buffer, "big", (this.position += 4) - 4)
};
Q.prototype.writeInt = Q.prototype.ga = function(a) {
  qa(a, "big", this.buffer, (this.position += 4) - 4)
};
Q.prototype.readDouble = Q.prototype.D = function() {
  return ra(this.buffer, "big", (this.position += 8) - 8)
};
Q.prototype.writeDouble = Q.prototype.da = function(a) {
  sa(a, "big", this.buffer, (this.position += 8) - 8)
};
Q.prototype.readLongBytes = Q.prototype.K = function() {
  for(var a = [], b = 0;8 > b;b++) {
    a.push(this.buffer[this.position + b])
  }
  this.position += 8;
  return new f(a)
};
Q.prototype.readLong = Q.prototype.J = function() {
  return this.readLongBytes()[0]
};
Q.prototype.writeLong = Q.prototype.ha = function(a) {
  "number" === typeof a && (a = new f(a.toString()));
  for(var a = a.toByteArray(), a = R(8 - a.length).concat(a), b = 0;8 > b;b++) {
    P(a[b], "big", this.buffer, this.position + b)
  }
  this.position += 8
};
Q.prototype.readString = Q.prototype.N = function() {
  return this.buffer.toString("utf8", this.position, this.position += this.readInt())
};
Q.prototype.writeString = Q.prototype.la = function(a) {
  var a = new Buffer(a, "utf8"), b = a.length;
  this.writeInt(b);
  for(var c = 0, d = this.position;c < b;c++) {
    this.buffer[d + c] = a[c]
  }
  this.position += b
};
Q.prototype.readDate = Q.prototype.B = function() {
  var a = this.readLongBytes().divide(S).toString();
  return new Date(parseInt(a))
};
Q.prototype.writeDate = Q.prototype.ba = function(a) {
  if(a instanceof Date) {
    a = Date.getTime()
  }else {
    if("number" !== typeof a) {
      throw Error("Date type must be a Date or number");
    }
  }
  this.writeLong((new f(a.toString())).multiply(S))
};
Q.prototype.readDecimal = Q.prototype.C = function() {
  for(var a = [], b = 0;16 > b;b++) {
    a.push(this.buffer[this.position + b])
  }
  this.position += 16;
  a = (new f(a)).toString();
  "-170141183460469231731687303715884105728" === a ? a = null : 12 >= a.length ? (a = R(12 - a.length).join("") + a, a = "0." + a) : (a = a.slice(0, -12) + "." + a.slice(-12), a = a.replace(/0+$/, ""));
  return a
};
Q.prototype.writeDecimal = Q.prototype.ca = function(a) {
  null == a && (a = "-170141183460469231731687303715884105728");
  "number" === typeof a && (a = a.toString());
  a = a.split(".");
  1 == a.length ? a.push("000000000000") : a[1] += R(12 - a[1].length).join("");
  a = (new f(a.join(""))).toByteArray();
  if(0 < a[0]) {
    a = R(16 - a.length).concat(a)
  }else {
    for(var b = 16 - a.length, c = Array(b), d = 0;d < b;d++) {
      c[d] = 1
    }
    a = c.concat(a)
  }
  for(b = 0;16 > b;b++) {
    P(a[b], "big", this.buffer, this.position + b)
  }
  this.position += 16
};
Q.prototype.readVarbinary = Q.prototype.P = function() {
  var a = this.readInt(), b = this.buffer.slice(this.position, this.position + a);
  this.position += a;
  return b
};
Q.prototype.writeVarbinary = Q.prototype.na = function(a) {
  this.writeInt(a.length);
  a.copy(this.buffer, this.position);
  this.position += a.length
};
Q.prototype.readNull = Q.prototype.L = function() {
  return null
};
Q.prototype.writeNull = Q.prototype.ia = function() {
};
Q.prototype.readArray = Q.prototype.f = function(a, b) {
  for(var a = T[this.readByte()], c = "byte" == a ? this.readInt() : this.readShort(), d = U[a], b = Array(c), e = 0;e < c;e++) {
    b[e] = this[d]()
  }
  return b
};
Q.prototype.writeArray = Q.prototype.g = function(a, b) {
  var c = b.length, d;
  if(d = a.match(V)) {
    this.writeByte(W.e);
    this.writeShort(c);
    var e = d[1];
    for(d = 0;d < c;d++) {
      this.writeArray(e, b[d])
    }
  }else {
    this.writeByte(W[a]);
    "byte" == a ? this.writeInt(c) : this.writeShort(c);
    e = X[a];
    for(d = 0;d < c;d++) {
      this[e](b[d])
    }
  }
};
Q.prototype.readVoltTable = Q.prototype.Q = function() {
  this.readInt();
  this.readInt();
  for(var a = this.readByte(), b = this.readShort(), c = Array(b), d = Array(b), e = 0;e < b;e++) {
    var g = this.readByte(), g = T[g];
    c[e] = g;
    d[e] = U[g]
  }
  g = Array(b);
  for(e = 0;e < b;e++) {
    g[e] = this.readString()
  }
  for(var h = this.readInt(), j = Array(h), e = 0;e < h;e++) {
    this.readInt();
    for(var m = {}, r = 0;r < b;r++) {
      m[g[r]] = this[d[r]]()
    }
    j[e] = m
  }
  j.status = a;
  j.l = g;
  j.m = c;
  return j
};
Q.prototype.readException = Q.prototype.G = function(a) {
  var b = this.readByte();
  this.readBinary(a - 1);
  return 1 == b ? Error("EEException") : 2 == b ? Error("SQLException") : 3 == b ? Error("ConstraintFailureException") : Error("An exception has occurred")
};
Q.prototype.writeParameterSet = Q.prototype.ja = function(a, b) {
  var c = b.length, d;
  this.writeShort(c);
  for(var e = 0;e < c;e++) {
    var g = a[e], h = b[e];
    (d = g.match(V)) ? (d = d[1], this.writeByte(W.e), this.writeArray(d, h)) : (this.writeByte(W[g]), this[X[g]](h))
  }
};
Q.readInt = function(a, b) {
  void 0 == b && (b = 0);
  return O(a, "big", b)
};
exports.Parser = Q;
var V = /array\[(.*)\]/, T = {"-99":"array", 1:"null", 3:"byte", 4:"short", 5:"int", 6:"long", 8:"double", 9:"string", 11:"date", 22:"decimal", 25:"varbinary"}, W = {array:-99, "null":1, "byte":3, tinyint:3, "short":4, smallint:4, "int":5, integer:5, "long":6, bigint:6, "double":8, "float":8, string:9, date:11, timestamp:11, decimal:22, varbinary:25}, U = {array:"readArray", "null":"readNull", "byte":"readByte", tinyint:"readByte", "short":"readShort", smallint:"readShort", "int":"readInt", integer:"readInt", 
"long":"readLong", bigint:"readLong", "double":"readDouble", "float":"readDouble", string:"readString", date:"readDate", timestamp:"readDate", decimal:"readDecimal", varbinary:"readVarbinary"}, X = {array:"writeArray", "null":"wrteNull", "byte":"wrteByte", tinyint:"writeByte", "short":"writeShort", smallint:"writeShort", "int":"writeInt", integer:"writeInt", "long":"writeLong", bigint:"writeLong", "double":"writeDouble", "float":"writeDouble", string:"writeString", date:"writeDate", timestamp:"writeDate", 
decimal:"writeDecimal", varbinary:"writeVarbinary"}, S = new f("1000");
function R(a) {
  for(var b = Array(a), c = 0;c < a;c++) {
    b[c] = 0
  }
  return b
}
exports.Parser = Q;
var Y = require("util");
function Z(a) {
  this.type = $.d;
  this.error = !1;
  Q.call(this, a);
  a ? this.readHeader() : (this.writeInt(0), this.writeByte(0))
}
Z.prototype = Object.create(Q.prototype);
Z.prototype.readHeader = Z.prototype.H = function() {
  this.length = this.readInt();
  this.protocol = this.readByte()
};
Z.prototype.writeHeader = Z.prototype.fa = function() {
  var a = this.position;
  this.position = 0;
  this.writeInt(this.buffer.length - 4);
  this.writeByte(0);
  this.position = a
};
Z.prototype.toBuffer = Z.prototype.W = function() {
  this.writeHeader();
  return new Buffer(this.buffer)
};
Z.readInt = function(a, b) {
  return Q.readInt(a, b)
};
LoginMessage = function(a) {
  Z.call(this, a);
  this.type = $.b;
  this.status = this.readByte();
  this.error = 0 === this.status ? !1 : !0;
  !1 === this.error && (this.serverId = this.readInt(), this.connectionId = this.readLong(), this.clusterStartTimestamp = new Date(parseInt(this.readLong().toString())), this.leaderIP = this.readByte() + "." + this.readByte() + "." + this.readByte() + "." + this.readByte(), this.build = this.readString())
};
Y.inherits(LoginMessage, Z);
LoginMessage.prototype.toString = LoginMessage.prototype.toString = function() {
  return{length:this.length, protocol:this.protocol, status:this.status, error:this.error, T:this.serverId, n:this.connectionId, k:this.clusterStartTimestamp, s:this.leaderIP, j:this.build}
};
QueryMessage = function(a) {
  Z.call(this, a);
  this.type = $.c;
  this.uid = this.readBinary(8).toString();
  this.fieldsPresent = this.readByte();
  this.status = this.readByte();
  this.statusString = ta[this.status];
  this.fieldsPresent & ua && (this.statusString = this.readString());
  this.appStatus = this.readByte();
  this.appStatusString = "";
  this.fieldsPresent & va && (this.appStatusString = this.readString());
  this.exception;
  this.exceptionLength = this.readInt();
  if(this.fieldsPresent & wa) {
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
Y.inherits(QueryMessage, Z);
QueryMessage.prototype.toString = QueryMessage.prototype.toString = function() {
  return{length:this.length, protocol:this.protocol, status:this.status, error:this.error, Y:this.uid, q:this.fieldsPresent, status:this.status, V:this.statusString, h:this.appStatus, i:this.appStatusString, o:this.exception, p:this.exceptionLength, S:this.results}
};
var $ = {d:-1, b:1, c:2}, ua = 32, wa = 64, va = 128, ta = {1:"SUCCESS", "-1":"USER_ABORT", "-2":"GRACEFUL_FAILURE", "-3":"UNEXPECTED_FAILURE", "-4":"CONNECTION_LOST"};
exports.MESSAGE_TYPE = $;
exports.Message = Z;
exports.LoginMessage = LoginMessage;
exports.QueryMessage = QueryMessage;

