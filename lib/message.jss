// # define(`DEBUG', true)


/* This file is part of VoltDB.
 * Copyright (C) 2008-2012 VoltDB Inc.
 *
 * This file contains original code and/or modifications of original code.
 * Any modifications made by VoltDB Inc. are licensed under the following
 * terms and conditions:
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/* This file is part of VoltDB.
 * Copyright (C) 2008-2012 VoltDB Inc.
 *
 * This file contains original code and/or modifications of original code.
 * Any modifications made by VoltDB Inc. are licensed under the following
 * terms and conditions:
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
var BigInteger = require('bignumber')['BigInteger']

/* This file is part of VoltDB.
 * Copyright (C) 2008-2012 VoltDB Inc.
 *
 * This file contains original code and/or modifications of original code.
 * Any modifications made by VoltDB Inc. are licensed under the following
 * terms and conditions:
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/*
 * The following license applies to all files unless the file is specified below.
 * Each file specified below has its license information embedded in it:
 * tools/jsstyle
 *
 * Copyright 2011, Robert Mustacchi. All rights reserved.
 * Copyright 2011, Joyent, Inc. All rights reserved.
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/*
 * rm - Feb 2011
 * ctype.js
 *
 * This module provides a simple abstraction towards reading and writing
 * different types of binary data. It is designed to use ctio.js and provide a
 * richer and more expressive API on top of it.
 *
 * By default we support the following as built in basic types:
 *	int8_t
 *	int16_t
 *	int32_t
 *	uint8_t
 *	uint16_t
 *	uint32_t
 *	float
 *	double
 *	char
 *	char[]
 *
 * Each type is returned as a Number, with the exception of char and char[]
 * which are returned as Node Buffers. A char is considered a uint8_t.
 *
 * Requests to read and write data are specified as an array of JSON objects.
 * This is also the same way that one declares structs. Even if just a single
 * value is requested, it must be done as a struct. The array order determines
 * the order that we try and read values. Each entry has the following format
 * with values marked with a * being optional.
 *
 * { key: { type: /type/, value*: /value/, offset*: /offset/ }
 *
 * If offset is defined, we lseek(offset, SEEK_SET) before reading the next
 * value. Value is defined when we're writing out data, otherwise it's ignored.
 *
 */

/* This file is part of VoltDB.
 * Copyright (C) 2008-2012 VoltDB Inc.
 *
 * This file contains original code and/or modifications of original code.
 * Any modifications made by VoltDB Inc. are licensed under the following
 * terms and conditions:
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/*
 * The following license applies to all files unless the file is specified below.
 * Each file specified below has its license information embedded in it:
 * tools/jsstyle
 * 
 * Copyright 2011, Robert Mustacchi. All rights reserved.
 * Copyright 2011, Joyent, Inc. All rights reserved.
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */


/*
 * rm - Feb 2011
 * ctio.js:
 *
 * A simple way to read and write simple ctypes. Of course, as you'll find the
 * code isn't as simple as it might appear. The following types are currently
 * supported in big and little endian formats:
 *
 * 	uint8_t			int8_t
 * 	uint16_t		int16_t
 * 	uint32_t		int32_t
 *	float (single precision IEEE 754)
 *	double (double precision IEEE 754)
 *
 * This is designed to work in Node and v8. It may in fact work in other
 * Javascript interpreters (that'd be pretty neat), but it hasn't been tested.
 * If you find that it does in fact work, that's pretty cool. Try and pass word
 * back to the original author.
 *
 * Note to the reader: If you're tabstop isn't set to 8, parts of this may look
 * weird.
 */

/*
 * Numbers in Javascript have a secret: all numbers must be represented with an
 * IEEE-754 double. The double has a mantissa with a length of 52 bits with an
 * implicit one. Thus the range of integers that can be represented is limited
 * to the size of the mantissa, this makes reading and writing 64-bit integers
 * difficult, but far from impossible.
 *
 * Another side effect of this representation is what happens when you use the
 * bitwise operators, i.e. shift left, shift right, and, or, etc. In Javascript,
 * each operand and the result is cast to a signed 32-bit number. However, in
 * the case of >>> the values are cast to an unsigned number.
 */

/*
 * A reminder on endian related issues:
 *
 * Big Endian: MSB -> First byte
 * Little Endian: MSB->Last byte
 */

/*
 * An 8 bit unsigned integer involves doing no significant work.
 */
function ruint8(buffer, endian, offset)
{






	




	return (buffer[offset]);
}

/*
 * For 16 bit unsigned numbers we can do all the casting that we want to do.
 */
function ruint16(buffer, endian, offset)
{
	var val = 0;










		val = buffer[offset] << 8;
		val |=  buffer[offset+1];
	
	return (val);
}

/*
 * Because most bitshifting is done using signed numbers, if we would go into
 * the realm where we use that 32nd bit, we'll end up going into the negative
 * range. i.e.:
 * > 200 << 24
 * -939524096
 *
 * Not the value you'd expect. To work around this, we instead do a
 * multiplication by (1 << 24) which does the same thing, but in a way that
 * ensures we don't lose that bit.
 */

/*
 * Handle the case of losing our MSBit
 */
function fixu32(upper, lower)
{
	return ((upper * (1 << 24)) + lower);
}

function ruint32(buffer, endian, offset)
{
	var val = 0;










		val = buffer[offset+1] << 16;
		val |= buffer[offset+2] << 8;
		val |= buffer[offset+3];
		val = fixu32(buffer[offset], val);
	
	return (val);
}

/*
 * Reads a 64-bit unsigned number. The astue observer will note that this
 * doesn't quite work. Javascript has chosen to only have numbers that can be
 * represented by a double. A double only has 52 bits of mantissa with an
 * implicit 1, thus we have up to 53 bits to represent an integer. However, 2^53
 * doesn't quite give us what we want. Isn't 53 bits enough for anyone? What
 * could you have possibly wanted to represent that was larger than that? Oh,
 * maybe a size? You mean we bypassed the 4 GB limit on file sizes, when did
 * that happen?
 *
 * To get around this egregious language issue, we're going to instead construct
 * an array of two 32 bit unsigned integers. Where arr[0] << 32 + arr[1] would
 * give the actual number. However, note that the above code probably won't
 * produce the desired results because of the way Javascript numbers are
 * doubles.
 */
function ruint64(buffer, endian, offset)
{
	var val = new Array(2);










		val[0] = ruint32(buffer, endian, offset);
		val[1] = ruint32(buffer, endian, offset+4);
	
	return (val);
}


/*
 * Signed integer types, yay team! A reminder on how two's complement actually
 * works. The first bit is the signed bit, i.e. tells us whether or not the
 * number should be positive or negative. If the two's complement value is
 * positive, then we're done, as it's equivalent to the unsigned representation.
 *
 * Now if the number is positive, you're pretty much done, you can just leverage
 * the unsigned translations and return those. Unfortunately, negative numbers
 * aren't quite that straightforward.
 *
 * At first glance, one might be inclined to use the traditional formula to
 * translate binary numbers between the positive and negative values in two's
 * complement. (Though it doesn't quite work for the most negative value)
 * Mainly:
 *  - invert all the bits
 *  - add one to the result
 *
 * Of course, this doesn't quite work in Javascript. Take for example the value
 * of -128. This could be represented in 16 bits (big-endian) as 0xff80. But of
 * course, Javascript will do the following:
 *
 * > ~0xff80
 * -65409
 *
 * Whoh there, Javascript, that's not quite right. But wait, according to
 * Javascript that's perfectly correct. When Javascript ends up seeing the
 * constant 0xff80, it has no notion that it is actually a signed number. It
 * assumes that we've input the unsigned value 0xff80. Thus, when it does the
 * binary negation, it casts it into a signed value, (positive 0xff80). Then
 * when you perform binary negation on that, it turns it into a negative number.
 *
 * Instead, we're going to have to use the following general formula, that works
 * in a rather Javascript friendly way. I'm glad we don't support this kind of
 * weird numbering scheme in the kernel.
 *
 * (BIT-MAX - (unsigned)val + 1) * -1
 *
 * The astute observer, may think that this doesn't make sense for 8-bit numbers
 * (really it isn't necessary for them). However, when you get 16-bit numbers,
 * you do. Let's go back to our prior example and see how this will look:
 *
 * (0xffff - 0xff80 + 1) * -1
 * (0x007f + 1) * -1
 * (0x0080) * -1
 *
 * Doing it this way ends up allowing us to treat it appropriately in
 * Javascript. Sigh, that's really quite ugly for what should just be a few bit
 * shifts, ~ and &.
 */

/*
 * Endianness doesn't matter for 8-bit signed values. We could in fact optimize
 * this case because the more traditional methods work, but for consistency,
 * we'll keep doing this the same way.
 */
function rsint8(buffer, endian, offset)
{
	var neg;









	neg = buffer[offset] & 0x80;
	
	if (!neg)
		return (buffer[offset]);

	return ((0xff - buffer[offset] + 1) * -1);
}

/*
 * The 16-bit version requires a bit more effort. In this case, we can leverage
 * our unsigned code to generate the value we want to return.
 */
function rsint16(buffer, endian, offset)
{
	var neg, val;









	val = ruint16(buffer, endian, offset);
	neg = val & 0x8000;
	if (!neg)
		return (val);

	return ((0xffff - val + 1) * -1);
}

/*
 * We really shouldn't leverage our 32-bit code here and instead utilize the
 * fact that we know that since these are signed numbers, we can do all the
 * shifting and binary anding to generate the 32-bit number. But, for
 * consistency we'll do the same. If we want to do otherwise, we should instead
 * make the 32 bit unsigned code do the optimization. But as long as there
 * aren't floats secretly under the hood for that, we /should/ be okay.
 */
function rsint32(buffer, endian, offset)
{
	//console.log('(' + offset + ')');

	var neg, val;









	val = ruint32(buffer, endian, offset);
	neg = val & 0x80000000;
	if (!neg)
		return (val);

	return ((0xffffffff - val + 1) * -1);
}

/*
 * The signed version of this code suffers from all of the same problems of the
 * other 64 bit version.
 */
function rsint64(buffer, endian, offset)
{
	var neg, val;









	val = ruint64(buffer, endian, offset);
	neg = val[0] & 0x80000000;

	if (!neg)
		return (val);

	val[0] = (0xffffffff - val[0]) * -1;
	val[1] = (0xffffffff - val[1] + 1) * -1;

	return (val);
}

/*
 * We now move onto IEEE 754: The traditional form for floating point numbers
 * and what is secretly hiding at the heart of everything in this. I really hope
 * that someone is actually using this, as otherwise, this effort is probably
 * going to be more wasted.
 *
 * One might be tempted to use parseFloat here, but that wouldn't work at all
 * for several reasons. Mostly due to the way floats actually work, and
 * parseFloat only actually works in base 10. I don't see base 10 anywhere near
 * this file.
 *
 * In this case we'll implement the single and double precision versions. The
 * quadruple precision, while probably useful, wouldn't really be accepted by
 * Javascript, so let's not even waste our time.
 *
 * So let's review how this format looks like. A single precision value is 32
 * bits and has three parts:
 *   -  Sign bit
 *   -  Exponent (Using bias notation)
 *   -  Mantissa
 *
 * |s|eeeeeeee|mmmmmmmmmmmmmmmmmmmmmmmmm|
 * 31| 30-23  |  22    	-       0       |
 *
 * The exponent is stored in a biased input. The bias in this case 127.
 * Therefore, our exponent is equal to the 8-bit value - 127.
 *
 * By default, a number is normalized in IEEE, that means that the mantissa has
 * an implicit one that we don't see. So really the value stored is 1.m.
 * However, if the exponent is all zeros, then instead we have to shift
 * everything to the right one and there is no more implicit one.
 *
 * Special values:
 *  - Positive Infinity:
 *	Sign:		0
 *	Exponent: 	All 1s
 *	Mantissa:	0
 *  - Negative Infinity:
 *	Sign:		1
 *	Exponent: 	All 1s
 *	Mantissa:	0
 *  - NaN:
 *	Sign:		*
 *	Exponent: 	All 1s
 *	Mantissa:	non-zero
 *  - Zero:
 *	Sign:		*
 *	Exponent:	All 0s
 *	Mantissa:	0
 *
 * In the case of zero, the sign bit determines whether we get a positive or
 * negative zero. However, since Javascript cannot determine the difference
 * between the two: i.e. -0 == 0, we just always return 0.
 *
 */
function rfloat(buffer, endian, offset)
{
	var bytes = [];
	var sign, exponent, mantissa, val;
	var bias = 127;
	var maxexp = 0xff;









	/* Normalize the bytes to be in endian order */

		bytes[0] = buffer[offset];
		bytes[1] = buffer[offset+1];
		bytes[2] = buffer[offset+2];
		bytes[3] = buffer[offset+3];
	
	sign = bytes[0] & 0x80;
	exponent = (bytes[0] & 0x7f) << 1;
	exponent |= (bytes[1] & 0x80) >>> 7;
	mantissa = (bytes[1] & 0x7f) << 16;
	mantissa |= bytes[2] << 8;
	mantissa |= bytes[3];

	/* Check for special cases before we do general parsing */
	if (!sign && exponent == maxexp && mantissa === 0)
		return (Number.POSITIVE_INFINITY);

	if (sign && exponent == maxexp && mantissa === 0)
		return (Number.NEGATIVE_INFINITY);

	if (exponent == maxexp && mantissa !== 0)
		return (Number.NaN);

	/*
	 * Javascript really doesn't have support for positive or negative zero.
	 * So we're not going to try and give it to you. That would be just
	 * plain weird. Besides -0 == 0.
	 */
	if (exponent === 0 && mantissa === 0)
		return (0);

	/*
	 * Now we can deal with the bias and the determine whether the mantissa
	 * has the implicit one or not.
	 */
	exponent -= bias;
	if (exponent == -bias) {
		exponent++;
		val = 0;
	} else {
		val = 1;
	}

	val = (val + mantissa * Math.pow(2, -23)) * Math.pow(2, exponent);

	if (sign)
		val *= -1;

	return (val);
}

/*
 * Doubles in IEEE 754 are like their brothers except for a few changes and
 * increases in size:
 *   - The exponent is now 11 bits
 *   - The mantissa is now 52 bits
 *   - The bias is now 1023
 *
 * |s|eeeeeeeeeee|mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm|
 * 63| 62 - 52   | 	51		-			0     |
 * 63| 62 - 52   |      51              -                       0     |
 *
 * While the size has increased a fair amount, we're going to end up keeping the
 * same general formula for calculating the final value. As a reminder, this
 * formula is:
 *
 * (-1)^s * (n + m) * 2^(e-b)
 *
 * Where:
 *	s	is the sign bit
 *	n	is (exponent > 0) ? 1 : 0 -- Determines whether we're normalized
 *					     or not
 *	m	is the mantissa
 *	e	is the exponent specified
 *	b	is the bias for the exponent
 *
 */
function rdouble(buffer, endian, offset)
{
	var bytes = [];
	var sign, exponent, mantissa, val, lowmant;
	var bias = 1023;
	var maxexp = 0x7ff;









	/* Normalize the bytes to be in endian order */

		bytes[0] = buffer[offset];
		bytes[1] = buffer[offset+1];
		bytes[2] = buffer[offset+2];
		bytes[3] = buffer[offset+3];
		bytes[4] = buffer[offset+4];
		bytes[5] = buffer[offset+5];
		bytes[6] = buffer[offset+6];
		bytes[7] = buffer[offset+7];
	
	/*
	 * We can construct the exponent and mantissa the same way as we did in
	 * the case of a float, just increase the range of the exponent.
	 */
	sign = bytes[0] & 0x80;
	exponent = (bytes[0] & 0x7f) << 4;
	exponent |= (bytes[1] & 0xf0) >>> 4;

	/*
	 * This is going to be ugly but then again, we're dealing with IEEE 754.
	 * This could probably be done as a node add on in a few lines of C++,
	 * but oh we'll, we've made it this far so let's be native the rest of
	 * the way...
	 *
	 * What we're going to do is break the mantissa into two parts, the
	 * lower 24 bits and the upper 28 bits. We'll multiply the upper 28 bits
	 * by the appropriate power and then add in the lower 24-bits. Not
	 * really that great. It's pretty much a giant kludge to deal with
	 * Javascript eccentricities around numbers.
	 */
	lowmant = bytes[7];
	lowmant |= bytes[6] << 8;
	lowmant |= bytes[5] << 16;
	mantissa = bytes[4];
	mantissa |= bytes[3] << 8;
	mantissa |= bytes[2] << 16;
	mantissa |= (bytes[1] & 0x0f) << 24;
	mantissa *= Math.pow(2, 24); /* Equivalent to << 24, but JS compat */
	mantissa += lowmant;

	/* Check for special cases before we do general parsing */
	if (!sign && exponent == maxexp && mantissa === 0)
		return (Number.POSITIVE_INFINITY);

	if (sign && exponent == maxexp && mantissa === 0)
		return (Number.NEGATIVE_INFINITY);

	if (exponent == maxexp && mantissa !== 0)
		return (Number.NaN);

	/*
	 * Javascript really doesn't have support for positive or negative zero.
	 * So we're not going to try and give it to you. That would be just
	 * plain weird. Besides -0 == 0.
	 */
	if (exponent === 0 && mantissa === 0)
		return (0);

	/*
	 * Now we can deal with the bias and the determine whether the mantissa
	 * has the implicit one or not.
	 */
	exponent -= bias;
	if (exponent == -bias) {
		exponent++;
		val = 0;
	} else {
		val = 1;
	}

	val = (val + mantissa * Math.pow(2, -52)) * Math.pow(2, exponent);

	if (sign)
		val *= -1;

	return (val);
}

/*
 * Now that we have gone through the pain of reading the individual types, we're
 * probably going to want some way to write these back. None of this is going to
 * be good. But since we have Javascript numbers this should certainly be more
 * interesting. Though we can constrain this end a little bit more in what is
 * valid. For now, let's go back to our friends the unsigned value.
 */

/*
 * Unsigned numbers seem deceptively easy. Here are the general steps and rules
 * that we are going to take:
 *   -  If the number is negative, throw an Error
 *   -  Truncate any floating point portion
 *   -  Take the modulus of the number in our base
 *   -  Write it out to the buffer in the endian format requested at the offset
 */

/*
 * We have to make sure that the value is a valid integer. This means that it is
 * non-negative. It has no fractional component and that it does not exceed the
 * maximum allowed value.
 *
 *	value		The number to check for validity
 *
 *	max		The maximum value
 */
function prepuint(value, max)
{








	return (value);
}

/*
 * 8-bit version, classy. We can ignore endianness which is good.
 */
function wuint8(value, endian, buffer, offset)
{
	var val;











	val = prepuint(value, 0xff);
	buffer[offset] = val;
}

/*
 * Pretty much the same as the 8-bit version, just this time we need to worry
 * about endian related issues.
 */
function wuint16(value, endian, buffer, offset)
{
	var val;











	val = prepuint(value, 0xffff);

		buffer[offset] = (val & 0xff00) >>> 8;
		buffer[offset+1] = val & 0x00ff;
	}

/*
 * The 32-bit version is going to have to be a little different unfortunately.
 * We can't quite bitshift to get the largest byte, because that would end up
 * getting us caught by the signed values.
 *
 * And yes, we do want to subtract out the lower part by default. This means
 * that when we do the division, it will be treated as a bit shift and we won't
 * end up generating a floating point value. If we did generate a floating point
 * value we'd have to truncate it intelligently, this saves us that problem and
 * may even be somewhat faster under the hood.
 */
function wuint32(value, endian, buffer, offset)
{
	var val;











	val = prepuint(value, 0xffffffff);

		buffer[offset] = (val - (val & 0x00ffffff)) / Math.pow(2, 24);
		buffer[offset+1] = (val >>> 16) & 0xff;
		buffer[offset+2] = (val >>> 8) & 0xff;
		buffer[offset+3] = val & 0xff;
	}

/*
 * Unlike the other versions, we expect the value to be in the form of two
 * arrays where value[0] << 32 + value[1] would result in the value that we
 * want.
 */
function wuint64(value, endian, buffer, offset)
{














	prepuint(value[0], 0xffffffff);
	prepuint(value[1], 0xffffffff);


		wuint32(value[0], endian, buffer, offset);
		wuint32(value[1], endian, buffer, offset+3);
	}

/*
 * We now move onto our friends in the signed number category. Unlike unsigned
 * numbers, we're going to have to worry a bit more about how we put values into
 * arrays. Since we are only worrying about signed 32-bit values, we're in
 * slightly better shape. Unfortunately, we really can't do our favorite binary
 * & in this system. It really seems to do the wrong thing. For example:
 *
 * > -32 & 0xff
 * 224
 *
 * What's happening above is really: 0xe0 & 0xff = 0xe0. However, the results of
 * this aren't treated as a signed number. Ultimately a bad thing.
 *
 * What we're going to want to do is basically create the unsigned equivalent of
 * our representation and pass that off to the wuint* functions. To do that
 * we're going to do the following:
 *
 *  - if the value is positive
 *	we can pass it directly off to the equivalent wuint
 *  - if the value is negative
 *	we do the following computation:
 *	mb + val + 1, where
 *	mb	is the maximum unsigned value in that byte size
 *	val	is the Javascript negative integer
 *
 *
 * As a concrete value, take -128. In signed 16 bits this would be 0xff80. If
 * you do out the computations:
 *
 * 0xffff - 128 + 1
 * 0xffff - 127
 * 0xff80
 *
 * You can then encode this value as the signed version. This is really rather
 * hacky, but it should work and get the job done which is our goal here.
 *
 * Thus the overall flow is:
 *   -  Truncate the floating point part of the number
 *   -  We don't have to take the modulus, because the unsigned versions will
 *   	take care of that for us. And we don't have to worry about that
 *   	potentially causing bad things to happen because of sign extension
 *   -  Pass it off to the appropriate unsigned version, potentially modifying
 *	the negative portions as necessary.
 */

/*
 * A series of checks to make sure we actually have a signed 32-bit number
 */
function prepsint(value, max, min)
{








	return (value);
}

/*
 * The 8-bit version of the signed value. Overall, fairly straightforward.
 */
function wsint8(value, endian, buffer, offset)
{
	var val;











	val = prepsint(value, 0x7f, -0xf0);
	if (val >= 0)
		wuint8(val, endian, buffer, offset);
	else
		wuint8(0xff + val + 1, endian, buffer, offset);
}

/*
 * The 16-bit version of the signed value. Also, fairly straightforward.
 */
function wsint16(value, endian, buffer, offset)
{
	var val;











	val = prepsint(value, 0x7fff, -0xf000);
	if (val >= 0)
		wuint16(val, endian, buffer, offset);
	else
		wuint16(0xffff + val + 1, endian, buffer, offset);

}

/*
 * We can do this relatively easily by leveraging the code used for 32-bit
 * unsigned code.
 */
function wsint32(value, endian, buffer, offset)
{
	var val;











	val = prepsint(value, 0x7fffffff, -0xf0000000);
	if (val >= 0)
		wuint32(val, endian, buffer, offset);
	else
		wuint32(0xffffffff + val + 1, endian, buffer, offset);
}

/*
 * The signed 64 bit integer should by in the same format as when received.
 * Mainly it should ensure that the value is an array of two integers where
 * value[0] << 32 + value[1] is the desired number.
 */
function wsint64(value, endian, buffer, offset)
{
	var vals = new Array(2);















	prepsint(value[0], 0x7fffffff, -0xf0000000);
	prepsint(value[1], 0xffffffff, -0xffffffff);

	/* Fix negative numbers */
	if (value[0] < 0 || value[1] < 0) {
		vals[0] = 0xffffffff - Math.abs(value[0]);
		vals[1] = 0x100000000 - Math.abs(value[1]);
		if (vals[1] == 0x100000000) {
			vals[1] = 0;
			vals[0]++;
		}
	} else {
		vals[0] = value[0];
		vals[1] = value[1];
	}


		wuint32(vals[0], endian, buffer, offset);
		wuint32(vals[1], endian, buffer, offset+4);
	}

/*
 * Now we are moving onto the weirder of these, the float and double. For this
 * we're going to just have to do something that's pretty weird. First off, we
 * have no way to get at the underlying float representation, at least not
 * easily. But that doesn't mean we can't figure it out, we just have to use our
 * heads.
 *
 * One might propose to use Number.toString(2). Of course, this is not really
 * that good, because the ECMAScript 262 v3 Standard says the following Section
 * 15.7.4.2-Number.prototype['toString'] = 
Number.prototype.toString  (radix):
 *
 * If radix is an integer from 2 to 36, but not 10, the result is a string, the
 * choice of which is implementation-dependent.
 *
 * Well that doesn't really help us one bit now does it? We could use the
 * standard base 10 version of the string, but that's just going to create more
 * errors as we end up trying to convert it back to a binary value. So, really
 * this just means we have to be non-lazy and parse the structure intelligently.
 *
 * First off, we can do the basic checks: NaN, positive and negative infinity.
 *
 * Now that those are done we can work backwards to generate the mantissa and
 * exponent.
 *
 * The first thing we need to do is determine the sign bit, easy to do, check
 * whether the value is less than 0. And convert the number to its absolute
 * value representation. Next, we need to determine if the value is less than
 * one or greater than or equal to one and from there determine what power was
 * used to get there. What follows is now specific to floats, though the general
 * ideas behind this will hold for doubles as well, but the exact numbers
 * involved will change.
 *
 * Once we have that power we can determine the exponent and the mantissa. Call
 * the value that has the number of bits to reach the power ebits. In the
 * general case they have the following values:
 *
 *	exponent	127 + ebits
 *	mantissa	value * 2^(23 - ebits) & 0x7fffff
 *
 * In the case where the value of ebits is <= -127 we are now in the case where
 * we no longer have normalized numbers. In this case the values take on the
 * following values:
 *
 * 	exponent	0
 *	mantissa	value * 2^149 & 0x7fffff
 *
 * Once we have the values for the sign, mantissa, and exponent. We reconstruct
 * the four bytes as follows:
 *
 *	byte0		sign bit and seven most significant bits from the exp
 *			sign << 7 | (exponent & 0xfe) >>> 1
 *
 *	byte1		lsb from the exponent and 7 top bits from the mantissa
 *			(exponent & 0x01) << 7 | (mantissa & 0x7f0000) >>> 16
 *
 *	byte2		bits 8-15 (zero indexing) from mantissa
 *			mantissa & 0xff00 >> 8
 *
 *	byte3		bits 0-7 from mantissa
 *			mantissa & 0xff
 *
 * Once we have this we have to assign them into the buffer in proper endian
 * order.
 */

/*
 * Compute the log base 2 of the value. Now, someone who remembers basic
 * properties of logarithms will point out that we could use the change of base
 * formula for logs, and in fact that would be astute, because that's what we'll
 * do for now. It feels cleaner, albeit it may be less efficient than just
 * iterating and dividing by 2. We may want to come back and revisit that some
 * day.
 */
function log2(value)
{
	return (Math.log(value) / Math.log(2));
}

/*
 * Helper to determine the exponent of the number we're looking at.
 */
function intexp(value)
{
	return (Math.floor(log2(value)));
}

/*
 * Helper to determine the exponent of the fractional part of the value.
 */
function fracexp(value)
{
	return (Math.floor(log2(value)));
}

function wfloat(value, endian, buffer, offset)
{
	var sign, exponent, mantissa, ebits;
	var bytes = [];












	if (isNaN(value)) {
		sign = 0;
		exponent = 0xff;
		mantissa = 23;
	} else if (value == Number.POSITIVE_INFINITY) {
		sign = 0;
		exponent = 0xff;
		mantissa = 0;
	} else if (value == Number.NEGATIVE_INFINITY) {
		sign = 1;
		exponent = 0xff;
		mantissa = 0;
	} else {
		/* Well we have some work to do */

		/* Thankfully the sign bit is trivial */
		if (value < 0) {
			sign = 1;
			value = Math.abs(value);
		} else {
			sign = 0;
		}

		/* Use the correct function to determine number of bits */
		if (value < 1)
			ebits = fracexp(value);
		else
			ebits = intexp(value);

		/* Time to deal with the issues surrounding normalization */
		if (ebits <= -127) {
			exponent = 0;
			mantissa = (value * Math.pow(2, 149)) & 0x7fffff;
		} else {
			exponent = 127 + ebits;
			mantissa = value * Math.pow(2, 23 - ebits);
			mantissa &= 0x7fffff;
		}
	}

	bytes[0] = sign << 7 | (exponent & 0xfe) >>> 1;
	bytes[1] = (exponent & 0x01) << 7 | (mantissa & 0x7f0000) >>> 16;
	bytes[2] = (mantissa & 0x00ff00) >>> 8;
	bytes[3] = mantissa & 0x0000ff;


		buffer[offset] = bytes[0];
		buffer[offset+1] = bytes[1];
		buffer[offset+2] = bytes[2];
		buffer[offset+3] = bytes[3];
	}

/*
 * Now we move onto doubles. Doubles are similar to floats in pretty much all
 * ways except that the processing isn't quite as straightforward because we
 * can't always use shifting, i.e. we have > 32 bit values.
 *
 * We're going to proceed in an identical fashion to floats and utilize the same
 * helper functions. All that really is changing are the specific values that we
 * use to do the calculations. Thus, to review we have to do the following.
 *
 * First get the sign bit and convert the value to its absolute value
 * representation. Next, we determine the number of bits that we used to get to
 * the value, branching whether the value is greater than or less than 1. Once
 * we have that value which we will again call ebits, we have to do the
 * following in the general case:
 *
 *	exponent	1023 + ebits
 *	mantissa	[value * 2^(52 - ebits)] % 2^52
 *
 * In the case where the value of ebits <= -1023 we no longer use normalized
 * numbers, thus like with floats we have to do slightly different processing:
 *
 *	exponent	0
 *	mantissa	[value * 2^1074] % 2^52
 *
 * Once we have determined the sign, exponent and mantissa we can construct the
 * bytes as follows:
 *
 *	byte0		sign bit and seven most significant bits form the exp
 *			sign << 7 | (exponent & 0x7f0) >>> 4
 *
 *	byte1		Remaining 4 bits from the exponent and the four most
 *			significant bits from the mantissa 48-51
 *			(exponent & 0x00f) << 4 | mantissa >>> 48
 *
 *	byte2		Bits 40-47 from the mantissa
 *			(mantissa >>> 40) & 0xff
 *
 *	byte3		Bits 32-39 from the mantissa
 *			(mantissa >>> 32) & 0xff
 *
 *	byte4		Bits 24-31 from the mantissa
 *			(mantissa >>> 24) & 0xff
 *
 *	byte5		Bits 16-23 from the Mantissa
 *			(mantissa >>> 16) & 0xff
 *
 *	byte6		Bits 8-15 from the mantissa
 *			(mantissa >>> 8) & 0xff
 *
 *	byte7		Bits 0-7 from the mantissa
 *			mantissa & 0xff
 *
 * Now we can't quite do the right shifting that we want in bytes 1 - 3, because
 * we'll have extended too far and we'll lose those values when we try and do
 * the shift. Instead we have to use an alternate approach. To try and stay out
 * of floating point, what we'll do is say that mantissa -= bytes[4-7] and then
 * divide by 2^32. Once we've done that we can use binary arithmetic. Oof,
 * that's ugly, but it seems to avoid using floating point (just based on how v8
 * seems to be optimizing for base 2 arithmetic).
 */
function wdouble(value, endian, buffer, offset)
{
	var sign, exponent, mantissa, ebits;
	var bytes = [];












	if (isNaN(value)) {
		sign = 0;
		exponent = 0x7ff;
		mantissa = 23;
	} else if (value == Number.POSITIVE_INFINITY) {
		sign = 0;
		exponent = 0x7ff;
		mantissa = 0;
	} else if (value == Number.NEGATIVE_INFINITY) {
		sign = 1;
		exponent = 0x7ff;
		mantissa = 0;
	} else {
		/* Well we have some work to do */

		/* Thankfully the sign bit is trivial */
		if (value < 0) {
			sign = 1;
			value = Math.abs(value);
		} else {
			sign = 0;
		}

		/* Use the correct function to determine number of bits */
		if (value < 1)
			ebits = fracexp(value);
		else
			ebits = intexp(value);

		/*
		 * This is a total hack to determine a denormalized value.
		 * Unfortunately, we sometimes do not get a proper value for
		 * ebits, i.e. we lose the values that would get rounded off.
		 *
		 *
		 * The astute observer may wonder why we would be
		 * multiplying by two Math.pows rather than just summing
		 * them. Well, that's to get around a small bug in the
		 * way v8 seems to implement the function. On occasion
		 * doing:
		 *
		 * foo * Math.pow(2, 1023 + 51)
		 *
		 * Causes us to overflow to infinity, where as doing:
		 *
		 * foo * Math.pow(2, 1023) * Math.pow(2, 51)
		 *
		 * Does not cause us to overflow. Go figure.
		 *
		 */
		if (value <= 2.225073858507201e-308 || ebits <= -1023) {
			exponent = 0;
			mantissa = value * Math.pow(2, 1023) * Math.pow(2, 51);
			mantissa %= Math.pow(2, 52);
		} else {
			/*
			 * We might have gotten fucked by our floating point
			 * logarithm magic. This is rather crappy, but that's
			 * our luck. If we just had a log base 2 or access to
			 * the stupid underlying representation this would have
			 * been much easier and we wouldn't have such stupid
			 * kludges or hacks.
			 */
			if (ebits > 1023)
				ebits = 1023;
			exponent = 1023 + ebits;
			mantissa = value * Math.pow(2, -ebits);
			mantissa *= Math.pow(2, 52);
			mantissa %= Math.pow(2, 52);
		}
	}

	/* Fill the bytes in backwards to deal with the size issues */
	bytes[7] = mantissa & 0xff;
	bytes[6] = (mantissa >>> 8) & 0xff;
	bytes[5] = (mantissa >>> 16) & 0xff;
	mantissa = (mantissa - (mantissa & 0xffffff)) / Math.pow(2, 24);
	bytes[4] = mantissa & 0xff;
	bytes[3] = (mantissa >>> 8) & 0xff;
	bytes[2] = (mantissa >>> 16) & 0xff;
	bytes[1] = (exponent & 0x00f) << 4 | mantissa >>> 24;
	bytes[0] = (sign << 7) | (exponent & 0x7f0) >>> 4;


		buffer[offset] = bytes[0];
		buffer[offset+1] = bytes[1];
		buffer[offset+2] = bytes[2];
		buffer[offset+3] = bytes[3];
		buffer[offset+4] = bytes[4];
		buffer[offset+5] = bytes[5];
		buffer[offset+6] = bytes[6];
		buffer[offset+7] = bytes[7];
	}

var mod_ctio = {};
mod_ctio.ruint8 = ruint8;
mod_ctio.ruint16 = ruint16;
mod_ctio.ruint32 = ruint32;
mod_ctio.ruint64 = ruint64;
mod_ctio.wuint8 = wuint8;
mod_ctio.wuint16 = wuint16;
mod_ctio.wuint32 = wuint32;
mod_ctio.wuint64 = wuint64;

mod_ctio.rsint8 = rsint8;
mod_ctio.rsint16 = rsint16;
mod_ctio.rsint32 = rsint32;
mod_ctio.rsint64 = rsint64;
mod_ctio.wsint8 = wsint8;
mod_ctio.wsint16 = wsint16;
mod_ctio.wsint32 = wsint32;
mod_ctio.wsint64 = wsint64;

mod_ctio.rfloat = rfloat;
mod_ctio.rdouble = rdouble;
mod_ctio.wfloat = wfloat;
mod_ctio.wdouble = wdouble;

var ASSERT = require('assert');

/*
 * This is the set of basic types that we support.
 *
 *	read		The function to call to read in a value from a buffer
 *
 *	write		The function to call to write a value to a buffer
 *
 */
var deftypes = {
  'uint8_t' : {
    read : ctReadUint8,
    write : ctWriteUint8
  },
  'uint16_t' : {
    read : ctReadUint16,
    write : ctWriteUint16
  },
  'uint32_t' : {
    read : ctReadUint32,
    write : ctWriteUint32
  },
  'int8_t' : {
    read : ctReadSint8,
    write : ctWriteSint8
  },
  'int16_t' : {
    read : ctReadSint16,
    write : ctWriteSint16
  },
  'int32_t' : {
    read : ctReadSint32,
    write : ctWriteSint32
  },
  'float' : {
    read : ctReadFloat,
    write : ctWriteFloat
  },
  'double' : {
    read : ctReadDouble,
    write : ctWriteDouble
  },
  'char' : {
    read : ctReadChar,
    write : ctWriteChar
  },
  'char[]' : {
    read : ctReadCharArray,
    write : ctWriteCharArray
  }
};

/*
 * The following are wrappers around the CType IO low level API. They encode
 * knowledge about the size and return something in the expected format.
 */
function ctReadUint8(endian, buffer, offset) {
  var val = mod_ctio.ruint8(buffer, endian, offset);
  return ( {
    value : val,
    size : 1
  });
}

function ctReadUint16(endian, buffer, offset) {
  var val = mod_ctio.ruint16(buffer, endian, offset);
  return ( {
    value : val,
    size : 2
  });
}

function ctReadUint32(endian, buffer, offset) {
  var val = mod_ctio.ruint32(buffer, endian, offset);
  return ( {
    value : val,
    size : 4
  });
}

function ctReadSint8(endian, buffer, offset) {
  var val = mod_ctio.rsint8(buffer, endian, offset);
  return ( {
    value : val,
    size : 1
  });
}

function ctReadSint16(endian, buffer, offset) {
  var val = mod_ctio.rsint16(buffer, endian, offset);
  return ( {
    value : val,
    size : 2
  });
}

function ctReadSint32(endian, buffer, offset) {
  var val = mod_ctio.rsint32(buffer, endian, offset);
  return ( {
    value : val,
    size : 4
  });
}

function ctReadFloat(endian, buffer, offset) {
  var val = mod_ctio.rfloat(buffer, endian, offset);
  return ( {
    value : val,
    size : 4
  });
}

function ctReadDouble(endian, buffer, offset) {
  var val = mod_ctio.rdouble(buffer, endian, offset);
  return ( {
    value : val,
    size : 8
  });
}

/*
 * Reads a single character into a node buffer
 */
function ctReadChar(endian, buffer, offset) {
  var res = new Buffer(1);
  res[0] = mod_ctio.ruint8(buffer, endian, offset);
  return ( {
    value : res,
    size : 1
  });
}

function ctReadCharArray(length, endian, buffer, offset) {
  var ii;
  var res = new Buffer(length);

  for( ii = 0; ii < length; ii++)
  res[ii] = mod_ctio.ruint8(buffer, endian, offset + ii);

  return ( {
    value : res,
    size : length
  });
}

function ctWriteUint8(value, endian, buffer, offset) {
  mod_ctio.wuint8(value, endian, buffer, offset);
  return (1);
}

function ctWriteUint16(value, endian, buffer, offset) {
  mod_ctio.wuint16(value, endian, buffer, offset);
  return (2);
}

function ctWriteUint32(value, endian, buffer, offset) {
  mod_ctio.wuint32(value, endian, buffer, offset);
  return (4);
}

function ctWriteSint8(value, endian, buffer, offset) {
  mod_ctio.wsint8(value, endian, buffer, offset);
  return (1);
}

function ctWriteSint16(value, endian, buffer, offset) {
  mod_ctio.wsint16(value, endian, buffer, offset);
  return (2);
}

function ctWriteSint32(value, endian, buffer, offset) {
  mod_ctio.wsint32(value, endian, buffer, offset);
  return (4);
}

function ctWriteFloat(value, endian, buffer, offset) {
  mod_ctio.wfloat(value, endian, buffer, offset);
  return (4);
}

function ctWriteDouble(value, endian, buffer, offset) {
  mod_ctio.wdouble(value, endian, buffer, offset);
  return (8);
}

/*
 * Writes a single character into a node buffer
 */
function ctWriteChar(value, endian, buffer, offset) {


  mod_ctio.ruint8(value[0], endian, buffer, offset);
  return (1);
}

/*
 * We're going to write 0s into the buffer if the string is shorter than the
 * length of the array.
 */
function ctWriteCharArray(value, length, endian, buffer, offset) {
  var ii;





  for( ii = 0; ii < value.length && ii < length; ii++)
  mod_ctio.wuint8(value[ii], endian, buffer, offset + ii);

  for(; ii < length; ii++)
  mod_ctio.wuint8(0, endian, offset + ii);

  return (length);
}

/*
 * Construct a per parser specific set of the basic types. That way if this is
 * modified, it's okay. The values themselves should never be modified; however,
 * the set of keys may change over time.
 */
function ctGetBasicTypes() {
  var ret = {};
  var key;
  for(key in deftypes)
  ret[key] = deftypes[key];

  return (ret);
}

/*
 * Given a string in the form of type[length] we want to split this into an
 * object that extracts that information. We want to note that we could possibly
 * have nested arrays so this should only check the furthest one. It may also be
 * the case that we have no [] pieces, in which case we just return the current
 * type.
 */
function ctParseType(str) {
  var begInd, endInd;
  var type, len;

  endInd = str.lastIndexOf(']');
  if(endInd == -1) {


    return ( {
      type : str
    });
  }
  begInd = str.lastIndexOf('[');



  type = str.substring(0, begInd);
  len = str.substring(begInd + 1, endInd);

  return ( {
    type : type,
    len : len
  });
}

/*
 * Given a request validate that all of the fields for it are valid and make
 * sense. This includes verifying the following notions:
 *  - Each type requested is present in types
 *  - Only allow a name for a field to be specified once
 *  - If an array is specified, validate that the requested field exists and
 *    comes before it.
 *  - If fields is defined, check that each entry has the occurrence of field
 */
function ctCheckReq(def, types, fields) {
  var ii, jj;
  var req, keys, key, exists;
  var found = {};





  for( ii = 0; ii < def.length; ii++) {
    req = def[ii];

    keys = Object.keys(req);





    key = ctParseType(req[keys[0]]['type']);

    /*
     * We may have nested arrays, we need to check the validity of
     * the types until the len field is undefined in key. However,
     * each time len is defined we need to verify it is either an
     * integer or corresponds to an already seen key.
     */
    while(key['len'] !== undefined) {
      if(isNaN(parseInt(key['len'], 10))) {
        exists = false;


      }
      key = ctParseType(key['type']);
    }

    /* Now we can validate if the type is valid */


    /* Check for any required fields */
    if(fields !== undefined) {
      for( jj = 0; jj < fields.length; jj++) {

      }
    }

    found[keys[0]] = true;
  }
}

/*
 * Create a new instance of the parser. Each parser has its own store of
 * typedefs and endianness. Conf is an object with the following values:
 *
 *	endian		Either 'big' or 'little' do determine the endianness we
 *			want to read from or write to.
 *
 */
/**
 * @constructor 
 */
function CTypeParser(conf) {






  this['endian'] = conf['endian'];
  this['types'] = ctGetBasicTypes();
}

/*
 * Sets the current endian value for the Parser. If the value is not valid,
 * throws an Error.
 *
 *	endian		Either 'big' or 'little' do determine the endianness we
 *			want to read from or write to.
 *
 */
CTypeParser.prototype['setEndian'] = 
CTypeParser.prototype.setEndian  = function(endian) {


  this['endian'] = endian;
};
/*
 * Returns the current value of the endian value for the parser.
 */
CTypeParser.prototype['getEndian'] = 
CTypeParser.prototype.getEndian  = function() {
  return (this['endian']);
};
/*
 * A user has requested to add a type, let us honor their request. Yet, if their
 * request doth spurn us, send them unto the Hells which Dante describes.
 *
 * 	name		The string for the type definition we're adding
 *
 *	value		Either a string that is a type/array name or an object
 *			that describes a struct.
 */
CTypeParser.prototype['typedef'] = 
CTypeParser.prototype.typedef  = function(name, value) {
  var type;






  type = ctParseType(name);







  if( typeof (value) == 'string') {
    type = ctParseType(value);
    if(type['len'] !== undefined) {

    }


    this['types'][name] = value;
  } else {
    /* We have a struct, validate it */
    ctCheckReq(value, this['types']);
    this['types'][name] = value;
  }
};
/*
 * Include all of the typedefs, but none of the built in types. This should be
 * treated as read-only.
 */
CTypeParser.prototype['lstypes'] = 
CTypeParser.prototype.lstypes  = function() {
  var key;
  var ret = {};

  for(key in this['types']) {
    if( key in deftypes)
      continue;
    ret[key] = this['types'][key];
  }

  return (ret);
};
/*
 * Given a type string that may have array types that aren't numbers, try and
 * fill them in from the values object. The object should be of the format where
 * indexing into it should return a number for that type.
 *
 *	str		The type string
 *
 *	values		An object that can be used to fulfill type information
 */
function ctResolveArray(str, values) {
  var ret = '';
  var type = ctParseType(str);

  while(type['len'] !== undefined) {
    if(isNaN(parseInt(type['len'], 10))) {

      ret = '[' + values[type['len']] + ']' + ret;
    } else {
      ret = '[' + type['len'] + ']' + ret;
    }
    type = ctParseType(type['type']);
  }
  ret = type['type'] + ret;

  return (ret);
}

/*
 * [private] Either the typedef resolves to another type string or to a struct.
 * If it resolves to a struct, we just pass it off to read struct. If not, we
 * can just pass it off to read entry.
 */
CTypeParser.prototype['resolveTypedef'] = 
CTypeParser.prototype.resolveTypedef  = function(type, dispatch, buffer, offset, value) {
  var pt;
  console.log(type);
  ASSERT.ok( type in this['types']);
  console.log(type + ':' + this['types'][type]);
  if( typeof (this['types'][type]) == 'string') {
    pt = ctParseType(this['types'][type]);
    if(dispatch == 'read')
      return (this['readEntry'](pt, buffer, offset));
    else if(dispatch == 'write')
      return (this['writeEntry'](value, pt, buffer, offset));
    else
      throw (new Error('invalid dispatch type to ' + 'resolveTypedef'));
  } else {
    if(dispatch == 'read')
      return (this['readStruct'](this['types'][type], buffer, offset));
    else if(dispatch == 'write')
      return (this['readStruct'](value, this['types'][type], buffer, offset));
    else
      throw (new Error('invalid dispatch type to ' + 'resolveTypedef'));
  }

};
/*
 * [private] Try and read in the specific entry.
 */
CTypeParser.prototype['readEntry'] = 
CTypeParser.prototype.readEntry  = function(type, buffer, offset) {
  var parse, len;

  /*
   * Because we want to special case char[]s this is unfortunately
   * a bit uglier than it really should be. We want to special
   * case char[]s so that we return a node buffer, thus they are a
   * first class type where as all other arrays just call into a
   * generic array routine which calls their data-specific routine
   * the specified number of times.
   *
   * The valid dispatch options we have are:
   *  - Array and char => char[] handler
   *  - Generic array handler
   *  - Generic typedef handler
   *  - Basic type handler
   */
  if(type['len'] !== undefined) {
    len = parseInt(type['len'], 10);


    if(type['type'] == 'char')
      parse = deftypes['char[]']['read'](len, this['endian'], buffer, offset);
    else
      parse = this['readArray'](type['type'], len, buffer, offset);
  } else {
    if(type['type'] in deftypes)
      parse = deftypes[type['type']]['read'](this['endian'], buffer, offset);
    else
      parse = this['resolveTypedef'](type['type'], 'read', buffer, offset);
  }

  return (parse);
};
/*
 * [private] Read an array of data
 */
CTypeParser.prototype['readArray'] = 
CTypeParser.prototype.readArray  = function(type, length, buffer, offset) {
  var ii, ent, pt;
  var baseOffset = offset;
  var ret = new Array(length);
  pt = ctParseType(type);

  for( ii = 0; ii < length; ii++) {
    ent = this['readEntry'](pt, buffer, offset);
    offset += ent['size'];
    ret[ii] = ent['value'];
  }

  return ( {
    value : ret,
    size : offset - baseOffset
  });
};
/*
 * [private] Read a single struct in.
 */
CTypeParser.prototype['readStruct'] = 
CTypeParser.prototype.readStruct  = function(def, buffer, offset) {
  var parse, ii, type, entry, key;
  var baseOffset = offset;
  var ret = {};

  /* Walk it and handle doing what's necessary */
  for( ii = 0; ii < def.length; ii++) {
    key = Object.keys(def[ii])[0];
    entry = def[ii][key];

    /* Resolve all array values */
    type = ctParseType(ctResolveArray(entry['type'], ret));

    if('offset' in entry)
      offset = baseOffset + entry['offset'];
    parse = this['readEntry'](type, buffer, offset);
    offset += parse['size'];
    ret[key] = parse['value'];
  }

  return ( {
    values : ret,
    size : (offset - baseOffset)
  });
};
/*
 * This is what we were born to do. We read the data from a buffer and return it
 * in an object whose keys match the values from the object.
 *
 *	def		The array definition of the data to read in
 *
 *	buffer		The buffer to read data from
 *
 *	offset		The offset to start writing to
 *
 * Returns an object where each key corresponds to an entry in def and the value
 * is the read value.
 */
CTypeParser.prototype['readData'] = 
CTypeParser.prototype.readData  = function(def, buffer, offset) {
  /* Sanity check for arguments */






  /* Sanity check the object definition */
  ctCheckReq(def, this['types']);

  return (this['readStruct'](def, buffer, offset)['values']);
};
/*
 * [private] Write out an array of data
 */
CTypeParser.prototype['writeArray'] = 
CTypeParser.prototype.writeArray  = function(value, type, length, buffer, offset) {
  var ii, pt;
  var baseOffset = offset;



  pt = ctParseType(type);
  for( ii = 0; ii < length; ii++)
  offset += this['writeEntry'](value[ii], pt, buffer, offset);

  return (offset - baseOffset);
};
/*
 * [private] Write the specific entry
 */
CTypeParser.prototype['writeEntry'] = 
CTypeParser.prototype.writeEntry  = function(value, type, buffer, offset) {
  var len, ret;

  if(type['len'] !== undefined) {
    len = parseInt(type['len'], 10);


    if(type['type'] == 'char')
      ret = deftypes['char[]']['write'](value, len, this['endian'], buffer, offset);
    else
      ret = this['writeArray'](value, type['type'], len, buffer, offset);
  } else {
    if(type['type'] in deftypes)
      ret = deftypes[type['type']]['write'](value, this['endian'], buffer, offset);
    else
      ret = this['resolveTypedef'](type['type'], 'write', buffer, offset, value);
  }

  return (ret);
};
/*
 * [private] Write a single struct out.
 */
CTypeParser.prototype['writeStruct'] = 
CTypeParser.prototype.writeStruct  = function(def, buffer, offset) {
  var ii, entry, type, key;
  var baseOffset = offset;
  var vals = {};

  for( ii = 0; ii < def.length; ii++) {
    key = Object.keys(def[ii])[0];
    entry = def[ii][key];
    type = ctParseType(ctResolveArray(entry['type'], vals));

    if('offset' in entry)
      offset = baseOffset + entry['offset'];
    offset += this['writeEntry'](entry['value'], type, buffer, offset);

    /* Now that we've written it out, we can use it for arrays */
    vals[key] = entry['value'];
  }
};
/*
 * This is the second half of what we were born to do, write out the data
 * itself.
 *
 *	def		The array definition of the data to write out with
 *			values
 *
 *	buffer		The buffer to write to
 *
 *	offset		The offset in the buffer to write to
 */
CTypeParser.prototype['write'] = 
CTypeParser.prototype.write  = function(def, buffer, offset) {






  ctCheckReq(def, this['types'], ['value']);

  this['writeStruct'](def, buffer, offset);
};
/*
 * Functions to go to and from 64 bit numbers in a way that is compatible with
 * Javascript limitations. There are two sets. One where the user is okay with
 * an approximation and one where they are definitely not okay with an
 * approximation.
 */

/*
 * Attempts to convert an array of two integers returned from rsint64 / ruint64
 * into an absolute 64 bit number. If however the value would exceed 2^52 this
 * will instead throw an error. The mantissa in a double is a 52 bit number and
 * rather than potentially give you a value that is an approximation this will
 * error. If you would rather an approximation, please see toApprox64.
 *
 *	val		An array of two 32-bit integers
 */
function toAbs64(val) {






  /* We have 20 bits worth of precision in this range */


  return (val[0] * Math.pow(2, 32) + val[1]);
}

/*
 * Will return the 64 bit value as returned in an array from rsint64 / ruint64
 * to a value as close as it can. Note that Javascript stores all numbers as a
 * double and the mantissa only has 52 bits. Thus this version may approximate
 * the value.
 *
 *	val		An array of two 32-bit integers
 */
function toApprox64(val) {






  return (Math.pow(2, 32) * val[0] + val[1]);
}

/*
 * Export the few things we actually want to. Currently this is just the CType
 * Parser and ctio.
 */
var ctype = {};
ctype.Parser = CTypeParser;

ctype.ruint8 = mod_ctio.ruint8;
ctype.ruint16 = mod_ctio.ruint16;
ctype.ruint32 = mod_ctio.ruint32;
ctype.ruint64 = mod_ctio.ruint64;
ctype.wuint8 = mod_ctio.wuint8;
ctype.wuint16 = mod_ctio.wuint16;
ctype.wuint32 = mod_ctio.wuint32;
ctype.wuint64 = mod_ctio.wuint64;

ctype.rsint8 = mod_ctio.rsint8;
ctype.rsint16 = mod_ctio.rsint16;
ctype.rsint32 = mod_ctio.rsint32;
ctype.rsint64 = mod_ctio.rsint64;
ctype.wsint8 = mod_ctio.wsint8;
ctype.wsint16 = mod_ctio.wsint16;
ctype.wsint32 = mod_ctio.wsint32;
ctype.wsint64 = mod_ctio.wsint64;

ctype.rfloat = mod_ctio.rfloat;
ctype.rdouble = mod_ctio.rdouble;
ctype.wfloat = mod_ctio.wfloat;
ctype.wdouble = mod_ctio.wdouble;
ctype.deftypes = deftypes;

var endian = 'big';

/**
 * @constructor 
 */
function Parser(buffer) {
  this['buffer'] = buffer || [];
  this['position'] = 0;
}

Parser.prototype['readBinary'] = 
Parser.prototype.readBinary  = function(length) {
  return this['buffer'].slice(this['position'], this['position'] += length);
};
Parser.prototype['writeBinary'] = 
Parser.prototype.writeBinary  = function(buffer) {
  for(var i = 0, l = buffer.length, pos = this['position']; i < l; i++) {
    this['buffer'][pos + i] = buffer[i];
  }
  this['position'] += l;
};

Parser.prototype['readByte'] = 
Parser.prototype.readByte  = function() {
  return ctype.rsint8(this['buffer'], endian, this['position']++);
};
Parser.prototype['writeByte'] = 
Parser.prototype.writeByte  = function(value) {
  ctype.wsint8(value, endian, this['buffer'], this['position']++);
};

Parser.prototype['readShort'] = 
Parser.prototype.readShort  = function() {
  return ctype.rsint16(this['buffer'], endian, (this['position'] += 2) - 2);
};
Parser.prototype['writeShort'] = 
Parser.prototype.writeShort  = function(value) {
  ctype.wsint16(value, endian, this['buffer'], (this['position'] += 2) - 2);
};

Parser.prototype['readInt'] = 
Parser.prototype.readInt  = function() {
  return ctype.rsint32(this['buffer'], endian, (this['position'] += 4) - 4);
};
Parser.prototype['writeInt'] = 
Parser.prototype.writeInt  = function(value) {
  ctype.wsint32(value, endian, this['buffer'], (this['position'] += 4) - 4);
};

Parser.prototype['readDouble'] = 
Parser.prototype.readDouble  = function() {
  return ctype.rdouble(this['buffer'], endian, (this['position'] += 8) - 8);
};
Parser.prototype['writeDouble'] = 
Parser.prototype.writeDouble  = function(value) {
  ctype.wdouble(value, endian, this['buffer'], (this['position'] += 8) - 8);
};

Parser.prototype['readLongBytes'] = 
Parser.prototype.readLongBytes  = function() {
  var bytes = [], numBytes = 8;
  for(var i = 0; i < numBytes; i++) {
    bytes.push(ctype.ruint8(this['buffer'], endian, this['position'] + i));
  }
  this['position'] += numBytes;
  return (new BigInteger(bytes));
};

Parser.prototype['readLong'] = 
Parser.prototype.readLong  = function() {
  return this['readLongBytes']()[0];
};
Parser.prototype['writeLong'] = 
Parser.prototype.writeLong  = function(value) {
  var bytes, numBytes = 8;
  if( typeof value === 'number')
    value = new BigInteger(value.toString());

  bytes = value.toByteArray();
  bytes = zeros(numBytes - bytes.length).concat(bytes);

  for(var i = 0; i < numBytes; i++)
  ctype.wsint8(bytes[i], endian, this['buffer'], this['position'] + i);
  this['position'] += numBytes;
};

Parser.prototype['readString'] = 
Parser.prototype.readString  = function() {
  var length = this['readInt']();
  return this['buffer'].toString('utf8', this['position'], this['position'] += length);
};
Parser.prototype['writeString'] = 
Parser.prototype.writeString  = function(value) {
  var strBuf = new Buffer(value, 'utf8');
  var length = strBuf.length;
  this['writeInt'](length);

  for(var i = 0, pos = this['position']; i < length; i++) {
    this['buffer'][pos + i] = strBuf[i];
  }
  this['position'] += length;
};

Parser.prototype['readDate'] = 
Parser.prototype.readDate  = function(value) {
  var bigInt, i = 0, numBytes = 8;
  bigInt = this['readLongBytes']();
  var intStr = bigInt.divide(thousand).toString();
  return new Date(parseInt(intStr));
};

Parser.prototype['writeDate'] = 
Parser.prototype.writeDate  = function(value) {
  var bigInt, i = 0, numBytes = 8;
  if( value instanceof Date)
    value = Date.getTime();
  else if( typeof value !== 'number')
    throw new Error('Date type must be a Date or number');
  bigInt = new BigInteger(value.toString());

  this['writeLong'](bigInt.multiply(thousand));
};

Parser.prototype['readDecimal'] = 
Parser.prototype.readDecimal  = function() {
  var bytes = [], bigInt, numBytes = 16, decimalPlaces = 12;
  for(var i = 0; i < numBytes; i++)
  bytes.push(ctype.ruint8(this['buffer'], endian, this['position'] + i));
  this['position'] += numBytes;
  bigInt = new BigInteger(bytes);
  var val = bigInt.toString();

  // handle the null value case
  if(val === '-170141183460469231731687303715884105728') {
    val = null;
  } else if(val.length <= 12) {
    // add leading zeros (e.g. 123 to 0.000000000123)
    val = zeros(decimalPlaces - val.length).join('') + val;
    val = '0.' + val;
  } else {
    // put the decimal in the right place
    val = val.slice(0, -decimalPlaces) + '.' + val.slice(-decimalPlaces);
    val = val.replace(/0+$/, '');
    // trim the trailing zeros
  }
  return val;
};
Parser.prototype['writeDecimal'] = 
Parser.prototype.writeDecimal  = function(value) {
  var bytes, bigInt, numBytes = 16, decimalPlaces = 12;
  if(value == null)
    value = '-170141183460469231731687303715884105728';
  if( typeof value === 'number')
    value = value.toString();


  // add decimal and missing zeros
  var parts = value.split('.');
  if(parts.length == 1)
    parts.push('000000000000');
  else
    parts[1] += zeros(12 - parts[1].length).join('');
  bigInt = new BigInteger(parts.join(''));
  bytes = bigInt.toByteArray();
  bytes = bytes[0] > 0 ? zeros(numBytes - bytes.length).concat(bytes) : ones(numBytes - bytes.length).concat(bytes);

  for(var i = 0; i < numBytes; i++)
  ctype.wsint8(bytes[i], endian, this['buffer'], this['position'] + i);
  this['position'] += numBytes;
};

Parser.prototype['readVarbinary'] = 
Parser.prototype.readVarbinary  = function() {
  var length = this['readInt']();
  var binary = this['buffer'].slice(this['position'], this['position'] + length);
  this['position'] += length;

  return binary;
  return null;
  // BUG: remove
}

Parser.prototype['writeVarbinary'] = 
Parser.prototype.writeVarbinary  = function(value) {
  this['writeInt'](value.length);
  value.copy(this['buffer'], this['position']);
  this['position'] += value.length;
}

Parser.prototype['readNull'] = 
Parser.prototype.readNull  = function() {
  // a no-op, no reading
  return null;
};
Parser.prototype['writeNull'] = 
Parser.prototype.writeNull  = function(value) {
  // a no-op, no writing
};

Parser.prototype['readArray'] = 
Parser.prototype.readArray  = function(type, value) {
  type = TYPES_STRINGS[this['readByte']()];


  var length = (type == 'byte' ? this['readInt']() : this['readShort']());
  var method = TYPES_READ[type];
  value = new Array(length);
  for(var i = 0; i < length; i++) {
    value[i] = this[method]();
  }
  return value;
};

Parser.prototype['writeArray'] = 
Parser.prototype.writeArray  = function(type, value) {




  var length = value.length, i, match;

  // if it's a subarray (e.g. type = array[string])
  if( match = type.match(arrExp)) {
    this['writeByte'](TYPES_NUMBERS.array);
    // write type 'array' -99
    this['writeShort'](length);
    var arrType = match[1];

    // write sub-array values
    for( i = 0; i < length; i++) {
      this['writeArray'](arrType, value[i])
    }
  } else {
    this['writeByte'](TYPES_NUMBERS[type]);
    // write type
    // write length
    type == 'byte' ? this['writeInt'](length) : this['writeShort'](length);
    var method = TYPES_WRITE[type];

    // write values
    for( i = 0; i < length; i++) {
      this[method](value[i]);
    }
  }
};

Parser.prototype['readVoltTable'] = 
Parser.prototype.readVoltTable  = function() {
  // header
  var tableLength = this['readInt']();
  var metaLength = this['readInt']();
  var status = this['readByte']();
  var columnCount = this['readShort']();
  var columnTypes = new Array(columnCount);
  var columnMethods = new Array(columnCount);
  for(var i = 0; i < columnCount; i++) {
    var typeByte = this['readByte']();
    var type = TYPES_STRINGS[typeByte];
    columnTypes[i] = type;
    columnMethods[i] = TYPES_READ[type];

  }
  var columnNames = new Array(columnCount);
  for( i = 0; i < columnCount; i++) {
    columnNames[i] = this['readString']();
  }
  var rowCount = this['readInt']();

  // data
  var rows = new Array(rowCount);
  for( i = 0; i < rowCount; i++) {
    var rowLength = this['readInt']();
    var row = {};
    for(var j = 0; j < columnCount; j++) {
      row[columnNames[j]] = this[columnMethods[j]]();
    }
    rows[i] = row;
  }

  rows.status = status;
  rows.columnNames = columnNames;
  rows.columnTypes = columnTypes;
  return rows;
};

Parser.prototype['readException'] = 
Parser.prototype.readException  = function(length) {

  var ordinal = this['readByte']();
  // they don't have a spec for exceptions at this time, just skip it.
  var theRest = this['readBinary'](length - 1);
  if(ordinal == 1)
    return new Error('EEException');
  else if(ordinal == 2)
    return new Error('SQLException');
  else if(ordinal == 3)
    return new Error('ConstraintFailureException');
  return new Error('An exception has occurred');
};

Parser.prototype['writeParameterSet'] = 
Parser.prototype.writeParameterSet  = function(types, values) {


  var length = values.length, match;
  this['writeShort'](length);

  for(var i = 0; i < length; i++) {
    var type = types[i];
    var value = values[i];
    checkType(type, value);

    // handle the array type
    if( match = type.match(arrExp)) {
      var arrType = match[1];
      this['writeByte'](TYPES_NUMBERS.array);
      this['writeArray'](arrType, value);
    } else {
      this['writeByte'](TYPES_NUMBERS[type]);
      var method = TYPES_WRITE[type];
      this[method](value);
    }
  }
};
// for getting lengths from incoming data
Parser['readInt'] = function(buffer, offset) {
  if(offset == undefined)
    offset = 0;
  return ctype.rsint32(buffer, endian, offset);
};

exports['Parser'] = Parser;

var arrExp = /array\[(.*)\]/;

var TYPES_STRINGS = {
  '-99' : 'array',
  '1' : 'null',
  '3' : 'byte',
  '4' : 'short',
  '5' : 'int',
  '6' : 'long',
  '8' : 'double',
  '9' : 'string',
  '11' : 'date',
  '22' : 'decimal',
  '25' : 'varbinary'
};

var TYPES_NUMBERS = {
  'array' : -99,
  'null' : 1,
  'byte' : 3,
  'tinyint' : 3,
  'short' : 4,
  'smallint' : 4,
  'int' : 5,
  'integer' : 5,
  'long' : 6,
  'bigint' : 6,
  'double' : 8,
  'float' : 8,
  'string' : 9,
  'date' : 11,
  'timestamp' : 11,
  'decimal' : 22,
  'varbinary' : 25
};

var TYPES_READ = {
  'array' : 'readArray',
  'null' : 'readNull',
  'byte' : 'readByte',
  'tinyint' : 'readByte',
  'short' : 'readShort',
  'smallint' : 'readShort',
  'int' : 'readInt',
  'integer' : 'readInt',
  'long' : 'readLong',
  'bigint' : 'readLong',
  'double' : 'readDouble',
  'float' : 'readDouble',
  'string' : 'readString',
  'date' : 'readDate',
  'timestamp' : 'readDate',
  'decimal' : 'readDecimal',
  'varbinary' : 'readVarbinary'
};
var TYPES_WRITE = {
  'array' : 'writeArray',
  'null' : 'wrteNull',
  'byte' : 'wrteByte',
  'tinyint' : 'writeByte',
  'short' : 'writeShort',
  'smallint' : 'writeShort',
  'int' : 'writeInt',
  'integer' : 'writeInt',
  'long' : 'writeLong',
  'bigint' : 'writeLong',
  'double' : 'writeDouble',
  'float' : 'writeDouble',
  'string' : 'writeString',
  'date' : 'writeDate',
  'timestamp' : 'writeDate',
  'decimal' : 'writeDecimal',
  'varbinary' : 'writeVarbinary'
};

var NUMERIC_TYPES = {
  'byte' : true,
  'tinyint' : true,
  'short' : true,
  'smallint' : true,
  'int' : true,
  'integer' : true,
  'long' : true,
  'bigint' : true,
  'double' : true,
  'float' : true,
  'date' : true,
  'timestamp' : true,
  'decimal' : true,
  'varbinary' : true
};
var STRING_TYPES = {
  'string' : true,
  'decimal' : true
};
var BIGINT_TYPES = {
  'long' : true,
  'bigint' : true
};

var thousand = new BigInteger('1000');

function zeros(num) {
  var arr = new Array(num);
  for(var i = 0; i < num; i++)
  arr[i] = 0;
  return arr;
}

function ones(num) {
  var arr = new Array(num);
  for(var i = 0; i < num; i++)
  arr[i] = 1;
  return arr;
}

function checkType(type, value) {















}

exports['Parser'] = Parser;

var util = require('util');

/**
 * @constructor 
 */

function Message(buffer) {
  this['type'] = MESSAGE_TYPE.UNDEFINED;
  this['error'] = false;
  Parser.call(this, buffer);
  if(!buffer) {
    this['writeInt'](0);
    this['writeByte'](0);
  } else {
    this['readHeader']();
  }
}

Message.prototype = Object.create(Parser.prototype);

Message.prototype['readHeader'] = 
Message.prototype.readHeader  = function() {
  this['length'] = this['readInt']();
  this['protocol'] = this['readByte']();
};

Message.prototype['writeHeader'] = 
Message.prototype.writeHeader  = function() {
  var pos = this['position'];
  this['position'] = 0;
  this['writeInt'](this['buffer'].length - 4);
  this['writeByte'](0);
  this['position'] = pos;
};

Message.prototype['toBuffer'] = 
Message.prototype.toBuffer  = function() {
  this['writeHeader']();
  return new Buffer(this['buffer']);
};
// for getting lengths from incoming data
Message['readInt'] = function(buffer, offset) {
  return Parser['readInt'](buffer, offset);
};

/**
 * @constructor
 */
LoginMessage = function(buffer) {
  Message.call(this, buffer);
  this['type'] = MESSAGE_TYPE.LOGIN;
  this['status'] = this['readByte']();
  this['error'] = (this['status'] === 0 ? false : true );
  if(this['error'] === false) {
    this['serverId'] = this['readInt']();
    this['connectionId'] = this['readLong']();
    this['clusterStartTimestamp'] = new Date(parseInt(this['readLong']().toString()));
    // not microseonds, milliseconds
    this['leaderIP'] = this['readByte']() + '.' + this['readByte']() + '.' + this['readByte']() + '.' + this['readByte']();
    this['build'] = this['readString']();
  }
}

util['inherits'](LoginMessage, Message);
var lm = LoginMessage.prototype;
lm['toString'] = 
LoginMessage.prototype.toString = function() {
  return {
    length : this['length'],
    protocol : this['protocol'],
    status : this['status'],
    error : this['error'],
    serverId : this['serverId'],
    connectionId : this['connectionId'],
    clusterStartTimestamp : this['clusterStartTimestamp'],
    leaderIP : this['leaderIP'],
    build : this['build']
  };
}

/**
 * @constructor
 */
QueryMessage = function(buffer) {
  Message.call(this, buffer);
  this['type'] = MESSAGE_TYPE.QUERY;

  this['uid'] = this['readBinary'](8).toString();
  this['fieldsPresent'] = this['readByte']();
  // bitfield, use PRESENT values to check
  this['status'] = this['readByte']();
  this['statusString'] = STATUS_CODE_STRINGS[this['status']];
  if(this['fieldsPresent'] & PRESENT.STATUS) {
    this['statusString'] = this['readString']();
  }
  this['appStatus'] = this['readByte']();
  this['appStatusString'] = '';
  if(this['fieldsPresent'] & PRESENT.APP_STATUS) {
    this['appStatusString'] = this['readString']();
  }
  this['exception']
  this['exceptionLength'] = this['readInt']();
  if(this['fieldsPresent'] & PRESENT.EXCEPTION) {
    this['exception'] = this['readException'](1);
    // seems size doesn't matter, always 1
  } else {
    // don't parse the rest if there was an exception. Bad material there.
    var resultCount = this['readShort']();
    if(resultCount != 0)
      resultCount = 1;
    // there can be more than one table with rows
    this['table'] = new Array(resultCount);
    for(var i = 0; i < resultCount; i++) {
      this['table'][i] = this['readVoltTable']();
    }

  }
}

util['inherits'](QueryMessage, Message);

var qm = QueryMessage.prototype;

qm['toString'] = 
QueryMessage.prototype.toString = function() {
  return {
    length : this['length'],
    protocol : this['protocol'],
    status : this['status'],
    error : this['error'],
    uid : this['uid'],
    fieldsPresent : this['fieldsPresent'],
    status : this['status'],
    statusString : this['statusString'],
    appStatus : this['appStatus'],
    appStatusString : this['appStatusString'],
    exception : this['exception'],
    exceptionLength : this['exceptionLength'],
    results : this['results']
  };
}
var MESSAGE_TYPE = {
  UNDEFINED : -1,
  LOGIN : 1,
  QUERY : 2
};

var PRESENT = {
  STATUS : 0x20,
  EXCEPTION : 0x40,
  APP_STATUS : 0x80
};

var STATUS_CODES = {
  SUCCESS : 1,
  USER_ABORT : -1,
  GRACEFUL_FAILURE : -2,
  UNEXPECTED_FAILURE : -3,
  CONNECTION_LOST : -4,
  SERVER_UNAVAILABLE : -5,
  CONNECTION_TIMEOUT : -6
};

var STATUS_CODE_STRINGS = {
  1 : 'SUCCESS',
  '-1' : 'USER_ABORT',
  '-2' : 'GRACEFUL_FAILURE',
  '-3' : 'UNEXPECTED_FAILURE',
  '-4' : 'CONNECTION_LOST'
};

var LOGIN_ERRORS = {
  1 : 'Too many connections',
  2 : 'Authentication failed, client took too long to transmit credentials',
  3 : 'Corrupt or invalid login message'
};

exports['MESSAGE_TYPE'] = MESSAGE_TYPE;
exports['Message'] = Message;
exports['LoginMessage'] = LoginMessage;
exports['QueryMessage'] = QueryMessage;
