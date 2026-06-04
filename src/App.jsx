import React, { useState } from 'react';

export default function SeaMossCalculator() {
  // Shipping table = TOTAL SHIPPING COST (USD)
  const shippingTable = {
    1: 51.9,
    1.5: 57.015,
    2: 62.24,
    2.5: 67.475,
    3: 72.69,
    3.5: 77.91,
    4: 83.14,
    4.5: 88.785,
    5: 98.25,
    5.5: 104.005,
    6: 109.74,
    6.5: 115.505,
    7: 121.24,
    7.5: 126.975,
    8: 132.72,
    8.5: 138.465,
    9: 144.18,
    9.5: 149.91,
    10: 156.36,
    10.5: 162.34,
    11: 168.31,
    11.5: 174.29,
    12: 180.27,
    12.5: 186.24,
    13: 192.22,
    13.5: 198.2,
    14: 204.17,
    14.5: 210.15,
    15: 215.37,
    15.5: 221.3,
    16: 227.22,
    16.5: 233.15,
    17: 239.08,
    17.5: 245,
    18: 250.93,
    18.5: 256.86,
    19: 262.78,
    19.5: 267.86,
    20: 272.75,
    21: 223.42,
    22: 234.06,
    23: 244.69,
    24: 255.33,
    25: 265.97,
    26: 276.61,
    27: 287.25,
    28: 297.89,
    29: 308.53,
    30: 319.17,
    31: 328.77,
    32: 339.37,
    33: 349.98,
    34: 360.58,
    35: 371.19,
    36: 381.79,
    37: 392.4,
    38: 403.01,
    39: 413.61,
    40: 424.22,
    41: 434.82,
    42: 445.43,
    43: 456.03,
    44: 466.64,
    45: 456.15,
    46: 466.29,
    47: 476.42,
    48: 486.56,
    49: 496.7,
    50: 506.83,
    51: 516.97,
    52: 527.11,
    53: 537.24,
    54: 547.38,
    55: 557.52,
    56: 567.65,
    57: 577.79,
    58: 587.93,
    59: 598.06,
    60: 608.2,
    61: 618.34,
    62: 628.47,
    63: 638.61,
    64: 648.75,
    65: 658.88,
    66: 669.02,
    67: 679.16,
    68: 689.29,
    69: 699.43,
    70: 709.57,
    71: 703.66,
    72: 713.57,
    73: 723.48,
    74: 733.39,
    75: 743.3,
    76: 753.21,
    77: 763.12,
    78: 773.03,
    79: 782.94,
    80: 792.85,
    81: 802.76,
    82: 812.67,
    83: 822.58,
    84: 832.49,
    85: 842.4,
    86: 852.32,
    87: 862.23,
    88: 872.14,
    89: 882.05,
    90: 891.96,
    91: 901.87,
    92: 911.78,
    93: 921.69,
    94: 931.6,
    95: 941.51,
    96: 951.42,
    97: 961.33,
    98: 971.24,
    99: 981.15,
    100: 991.06,
    101: 997.59,
    102: 1007.47,
    103: 1017.35,
    104: 1027.22,
    105: 1037.1,
    106: 1046.98,
    107: 1056.86,
    108: 1066.73,
    109: 1076.61,
    110: 1086.49,
    111: 1096.37,
    112: 1106.24,
    113: 1116.12,
    114: 1126,
    115: 1135.87,
    116: 1145.75,
    117: 1155.63,
    118: 1165.51,
    119: 1175.38,
    120: 1185.26,
    121: 1195.14,
    122: 1205.01,
    123: 1214.89,
    124: 1224.77,
    125: 1234.65,
    126: 1244.52,
    127: 1254.4,
    128: 1264.28,
    129: 1274.15,
    130: 1284.03,
    131: 1293.91,
    132: 1303.79,
    133: 1313.66,
    134: 1323.54,
    135: 1333.42,
    136: 1343.29,
    137: 1353.17,
    138: 1363.05,
    139: 1372.93,
    140: 1382.8,
    141: 1392.68,
    142: 1402.56,
    143: 1412.43,
    144: 1422.31,
    145: 1432.19,
    146: 1442.07,
    147: 1451.94,
    148: 1461.82,
    149: 1471.7,
    150: 1481.57,
    151: 1491.45,
    152: 1501.33,
    153: 1511.21,
    154: 1521.08,
    155: 1530.96,
    156: 1540.84,
    157: 1550.71,
    158: 1560.59,
    159: 1570.47,
    160: 1580.35,
    161: 1590.22,
    162: 1600.1,
    163: 1609.98,
    164: 1619.85,
    165: 1629.73,
    166: 1639.61,
    167: 1649.49,
    168: 1659.36,
    169: 1669.24,
    170: 1679.12,
    171: 1688.99,
    172: 1698.87,
    173: 1708.75,
    174: 1718.63,
    175: 1728.5,
    176: 1738.38,
    177: 1748.26,
    178: 1758.14,
    179: 1768.01,
    180: 1777.89,
    181: 1787.77,
    182: 1797.64,
    183: 1807.52,
    184: 1817.4,
    185: 1827.28,
    186: 1837.15,
    187: 1847.03,
    188: 1856.91,
    189: 1866.78,
    190: 1876.66,
    191: 1886.54,
    192: 1896.42,
    193: 1906.29,
    194: 1916.17,
    195: 1926.05,
    196: 1935.92,
    197: 1945.8,
    198: 1955.68,
    199: 1965.56,
    200: 1975.43
  };

  const [unit, setUnit] = useState('lbs');
  const [currency, setCurrency] = useState('USD');
  const [form, setForm] = useState({
    name:'',
country:'',
    gummies: '',
    dry: '',
    soap: '',
    jar: '',
    pouch: '',
    labelDesign: false,
  bulkFlavors: [],
jarFlavors: [],
pouchFlavors: [],
  soapScents: [],
  jarLid: '',
pouchColor: '',

  });

  const convertToKg = (value) => {
    const num = parseFloat(value || 0);
    if (unit === 'lbs') return num * 0.454;
    return num;
  };

  const gummiesKg = convertToKg(form.gummies);
  const dryKg = convertToKg(form.dry);

  const soapQty = parseFloat(form.soap || 0);
  const jarQty = parseFloat(form.jar || 0);
  const pouchQty = parseFloat(form.pouch || 0);

  const totalProductWeight =
    gummiesKg +
    dryKg +
    soapQty * 0.15 +
    jarQty * 0.2 +
    pouchQty * 0.18;

  // Volumetric weight
  const volumetricWeight =
    gummiesKg * 0.5 +
    dryKg * 1.8 +
    soapQty * 0.028 +
    jarQty * 0.102 +
    pouchQty * 0.18;

  // Use whichever is larger
  const shippingBaseWeight = Math.max(totalProductWeight, volumetricWeight);

  const cartonCount = Math.max(1, Math.ceil(totalProductWeight / 25));
  const grossWeight = shippingBaseWeight + cartonCount * 1.5;

  const roundedWeight = grossWeight < 20
    ? Math.ceil(grossWeight * 2) / 2
    : Math.ceil(grossWeight);

  let shippingCost = shippingTable[roundedWeight] || 0;

  // Hidden soap surcharge
  if (soapQty > 0 && roundedWeight >= 20) {
    shippingCost += 13;
  }

  const productCost =
    gummiesKg * 13.4 +
    dryKg * 12.14 +
    soapQty * 2.6 +
    jarQty * 2.91 +
    pouchQty * 2.66;

  const gummiesCost = gummiesKg * 13.4;
  const dryCost = dryKg * 12.14;
  const soapCost = soapQty * 2.6;
  const jarCost = jarQty * 2.91;
  const pouchCost = pouchQty * 2.66;

  // Shipping allocation by weight ratio
  const gummiesWeight = gummiesKg;
  const dryWeight = dryKg;
  const soapWeight = soapQty * 0.15;
  const jarWeight = jarQty * 0.2;
  const pouchWeight = pouchQty * 0.18;

  const allocateShipping = (weight) => {
    if (totalProductWeight === 0) return 0;
    return (weight / totalProductWeight) * shippingCost;
  };

  const gummiesLanded = gummiesCost + allocateShipping(gummiesWeight);
  const dryLanded = dryCost + allocateShipping(dryWeight);
  const soapLanded = soapCost + allocateShipping(soapWeight);
  const jarLanded = jarCost + allocateShipping(jarWeight);
  const pouchLanded = pouchCost + allocateShipping(pouchWeight);
  // Unit landed cost
  // Landed cost per unit

const gummiesUnitCost =
  gummiesKg > 0 ? gummiesLanded / gummiesKg : 0;

const dryUnitCost =
  dryKg > 0 ? dryLanded / dryKg : 0;

const soapUnitCost =
  soapQty > 0 ? soapLanded / soapQty : 0;

const jarUnitCost =
  jarQty > 0 ? jarLanded / jarQty : 0;

const pouchUnitCost =
  pouchQty > 0 ? pouchLanded / pouchQty : 0;

// Display according to selected unit

const gummiesDisplayUnitCost =
  unit === 'kg'
    ? gummiesUnitCost
    : gummiesUnitCost / 2.20462;

const dryDisplayUnitCost =
  unit === 'kg'
    ? dryUnitCost
    : dryUnitCost / 2.20462;
const convertCurrency = (amount) => {
  switch (currency) {
    case 'CAD':
      return amount / 0.65;
    case 'GBP':
      return amount / 1.28;
    case 'EUR':
      return amount / 1.12;
    default:
      return amount;
  }
};
const gummiesDisplayPrice =
  convertCurrency(gummiesDisplayUnitCost);

const dryDisplayPrice =
  convertCurrency(dryDisplayUnitCost);

const soapDisplayPrice =
  convertCurrency(soapUnitCost);

const jarDisplayPrice =
  convertCurrency(jarUnitCost);

const pouchDisplayPrice =
  convertCurrency(pouchUnitCost);




// Estimated reseller profit
const jarProfitLow = convertCurrency(30 - jarUnitCost);
const jarProfitHigh = convertCurrency(35 - jarUnitCost);

const pouchProfitLow = convertCurrency(25 - pouchUnitCost);
const pouchProfitHigh = convertCurrency(30 - pouchUnitCost);

const soapProfitLow = convertCurrency(12 - soapUnitCost);
const soapProfitHigh = convertCurrency(15 - soapUnitCost);

const currencySymbol =
currency === 'GBP'
? '£'
: currency === 'EUR'
? '€'
: '$'

  const labelDesignCost = form.labelDesign ? 75 : 0;

 

  const total = Math.ceil(productCost + shippingCost + labelDesignCost);
  



const displayTotal = Math.ceil(convertCurrency(total));

  const overLimit = roundedWeight > 200;

  let recommendation = ''

if (roundedWeight > 0 && roundedWeight < 20) {

recommendation =
'💡 New customers usually start with 20–30 jars + 20–30 soaps'

}

else if (roundedWeight >= 20 && roundedWeight < 45) {

recommendation =
'💡 Add jars or soaps → better landed cost'

}

else if (roundedWeight >= 45) {

recommendation =
'🔥 Great unit cost zone (45kg+)'

}

  const hasOrder =
  gummiesKg > 0 ||
  dryKg > 0 ||
  soapQty > 0 ||
  jarQty > 0 ||
  pouchQty > 0;



  
  const buildOrderMessage = () => {
let msg = `Hello Larry, I built an order:

Name:
${form.name || '-'}


Country:
${form.country || '-'}





`

if(form.gummies){

msg +=
`Sea Moss Gummies:
${form.gummies} ${unit}

`

if(form.bulkFlavors.length){

msg +=
`Flavors:
${form.bulkFlavors.join(', ')}

`

}

}



if(form.dry){

msg +=
`Gold Sea Moss:
${form.dry} ${unit}

`

}

if(form.soap){

msg +=
`Sea Moss Soap:
${form.soap}

`

if(form.soapScents.length){

msg +=
`Scents:
${form.soapScents.join(', ')}

`

}

}

if(form.jar){

msg +=
`60ct Gummies Jar:
${form.jar}

`

if(form.jarFlavors.length){

msg +=
`Flavors:
${form.jarFlavors.join(', ')}

`

}

if(form.jarLid){

msg +=
`Lid:
${form.jarLid}

`

}





}

if(form.pouch){

msg +=
`60ct Gummies Pouch:
${form.pouch}

`

if(form.pouchFlavors.length){

msg +=
`Flavors:
${form.pouchFlavors.join(', ')}

`

}

if(form.pouchColor){

msg +=
`Pouch Color:
${form.pouchColor}

`

}

}



if(form.labelDesign){

msg +=
`Label Design:
Included (+${currency}${Math.ceil(convertCurrency(75))})

`

}

msg +=
`Estimated Total:
${currencySymbol}${displayTotal}

Questions:
`

return msg
}

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 space-y-8">
        <div className="flex flex-col items-center text-center">

<h1 className="text-5xl font-bold leading-tight">
Larry Sea Moss
</h1>

<p className="text-2xl font-semibold text-gray-600 mt-2">
Wholesale Calculator
</p>

<p className="text-gray-500 mt-2">
Build your order • Estimate landed cost • Request quote
</p>

<p className="text-red-600 font-medium mt-3">
Price included shipping already to
US, UK, Canada, EU, Dubai, Saudi Arabia
</p>

</div>

        <div className="flex gap-3 justify-center">
          <button
            onClick={() => setUnit('kg')}
            className={`px-5 py-2 rounded-2xl ${unit === 'kg' ? 'bg-black text-white' : 'bg-gray-200'}`}
          >
            Kilogram (kg)
          </button>

          <button
            onClick={() => setUnit('lbs')}
            className={`px-5 py-2 rounded-2xl ${unit === 'lbs' ? 'bg-black text-white' : 'bg-gray-200'}`}
          >
            Pounds (lbs)
          </button>
        </div>
        <div className="flex gap-3 mt-4 justify-center">
  <button
    onClick={() => setCurrency('USD')}
    className={`px-4 py-2 rounded-xl ${
      currency === 'USD' ? 'bg-black text-white' : 'bg-gray-200'
    }`}
  >
    USD
  </button>

  <button
    onClick={() => setCurrency('CAD')}
    className={`px-4 py-2 rounded-xl ${
      currency === 'CAD' ? 'bg-black text-white' : 'bg-gray-200'
    }`}
  >
    CAD
  </button>

  <button
    onClick={() => setCurrency('GBP')}
    className={`px-4 py-2 rounded-xl ${
      currency === 'GBP' ? 'bg-black text-white' : 'bg-gray-200'
    }`}
  >
    GBP
  </button>

  <button
    onClick={() => setCurrency('EUR')}
    className={`px-4 py-2 rounded-xl ${
      currency === 'EUR' ? 'bg-black text-white' : 'bg-gray-200'
    }`}
  >
    EUR
  </button>
</div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="font-semibold">
  Sea Moss Gummies ({unit})

  <div className="text-sm font-normal text-gray-500">
Bulk order • Packed in bags
</div>

</label>
            
            <input
              type="number"
              value={form.gummies}
              onChange={(e) => setForm({...form, gummies: e.target.value})}
              className="w-full border rounded-2xl p-3"
              onWheel={(e) => e.target.blur()}
            />
          </div>

          <div className="space-y-2">
            <label className="font-semibold">

Gold Sea Moss ({unit})

<div className="text-sm font-normal text-transparent">

Bulk order • Packed in bags

</div>

</label>
            <input
              type="number"
              value={form.dry}
              onChange={(e) => setForm({...form, dry: e.target.value})}
              className="w-full border rounded-2xl p-3"
              onWheel={(e) => e.target.blur()}
            />
          </div>

          <div className="space-y-2">
            <label className="font-semibold">
              Sea Moss Soap (quantity)
              <div className="text-sm font-normal text-gray-500">
                Labeling apply & seal included
              </div>
            </label>
            <input
              type="number"
              value={form.soap}
              onChange={(e) => setForm({...form, soap: e.target.value})}
              className="w-full border rounded-2xl p-3"
              onWheel={(e) => e.target.blur()}
            />
          </div>

          <div className="space-y-2">
            <label className="font-semibold">
              60ct Gummies Plastic Jar (quantity)
              <div className="text-sm font-normal text-gray-500">
                Labeling apply & seal included
              </div>
            </label>
            <input
              type="number"
              value={form.jar}
              onChange={(e) => setForm({...form, jar: e.target.value})}
              className="w-full border rounded-2xl p-3"
              onWheel={(e) => e.target.blur()}
            />
          </div>

          <div className="space-y-2">
            <label className="font-semibold">
              60ct Gummies Pouch (quantity)
              <div className="text-sm font-normal text-gray-500">
                Labeling apply included
              </div>
            </label>
            <input
              type="number"
              value={form.pouch}
              onChange={(e) => setForm({...form, pouch: e.target.value})}
              className="w-full border rounded-2xl p-3"
              onWheel={(e) => e.target.blur()}
            />
          </div>

          <div className="md:col-span-2 bg-gray-50 border rounded-2xl p-4 flex items-center gap-3">
            <input
              type="checkbox"
              checked={form.labelDesign}
              onChange={(e) => setForm({...form, labelDesign: e.target.checked})}
              className="w-5 h-5"
            />
            <label className="font-semibold">

Add Label Design Service

{' '}

(+{currencySymbol}
{Math.ceil(convertCurrency(75))}
{' '}
{currency})

</label>
          </div>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 border space-y-6">
          <h2 className="text-2xl font-semibold text-gray-500 text-center">
            Estimated Total Price
          </h2>

          <div className="space-y-3 text-lg">
            {gummiesKg > 0 && (
  <div className="flex justify-between">
    <span>Sea Moss Gummies</span>
    <span>
  {currency === 'USD' && `$${gummiesDisplayPrice.toFixed(2)} / ${unit}`}
{currency === 'CAD' && `$${gummiesDisplayPrice.toFixed(2)} CAD / ${unit}`}
{currency === 'GBP' && `£${gummiesDisplayPrice.toFixed(2)} / ${unit}`}
{currency === 'EUR' && `€${gummiesDisplayPrice.toFixed(2)} / ${unit}`}
</span>
  </div>
)}

{gummiesKg > 0 && (

<div className="text-xs text-gray-500">

{gummiesKg < 5
? 'Best for testing flavors'
: gummiesKg < 20
? 'Balanced landed cost'
: 'Good shipping efficiency'}

</div>

)}

            {dryKg > 0 && (
  <div className="flex justify-between">
    <span>Gold Sea Moss</span>
    <span>
  {currency === 'USD' && `$${dryDisplayPrice.toFixed(2)} / ${unit}`}
{currency === 'CAD' && `$${dryDisplayPrice.toFixed(2)} CAD / ${unit}`}
{currency === 'GBP' && `£${dryDisplayPrice.toFixed(2)} / ${unit}`}
{currency === 'EUR' && `€${dryDisplayPrice.toFixed(2)} / ${unit}`}
</span>
  </div>
)}

{dryKg > 0 && (

<div className="text-xs text-gray-500">

{dryKg < 5
? 'Usually mixed with other products'
: 'Good standalone order'}

</div>

)}

            {soapQty > 0 && (
  <div className="flex justify-between">
    <span>Sea Moss Soap</span>
    <span>
  {currency === 'USD' && `$${soapDisplayPrice.toFixed(2)} / bar`}
{currency === 'CAD' && `$${soapDisplayPrice.toFixed(2)} CAD / bar`}
{currency === 'GBP' && `£${soapDisplayPrice.toFixed(2)} / bar`}
{currency === 'EUR' && `€${soapDisplayPrice.toFixed(2)} / bar`}
</span>
  </div>
)}

{soapQty > 0 && (

<div className="text-xs text-gray-500">

{soapQty < 20
? 'Good for testing'
: 'Popular wholesale size'}

</div>

)}

           {jarQty > 0 && (
  <div className="flex justify-between">
    <span>60ct Gummies Jar</span>
    <span>
  {currency === 'USD' && `$${jarDisplayPrice.toFixed(2)} / jar`}
{currency === 'CAD' && `$${jarDisplayPrice.toFixed(2)} CAD / jar`}
{currency === 'GBP' && `£${jarDisplayPrice.toFixed(2)} / jar`}
{currency === 'EUR' && `€${jarDisplayPrice.toFixed(2)} / jar`}
</span>
  </div>
  
)}

{jarQty > 0 && (

<div className="text-xs text-gray-500">

{jarQty < 20
? 'Small test quantity'
: jarQty < 50
? 'Good starter order'
: 'Better unit cost'}

</div>

)}

           {pouchQty > 0 && (
  <div className="flex justify-between">
    <span>60ct Gummies Pouch</span>
    <span>
  {currency === 'USD' && `$${pouchDisplayPrice.toFixed(2)} / pouch`}
{currency === 'CAD' && `$${pouchDisplayPrice.toFixed(2)} CAD / pouch`}
{currency === 'GBP' && `£${pouchDisplayPrice.toFixed(2)} / pouch`}
{currency === 'EUR' && `€${pouchDisplayPrice.toFixed(2)} / pouch`}
</span>
  </div>
)}

{pouchQty > 0 && (

<div className="text-xs text-gray-500">

{pouchQty < 20
? 'Small test quantity'
: pouchQty < 50
? 'Good starter order'
: 'Better unit cost'}

</div>

)}

           {form.labelDesign && (
<div className="flex justify-between">

<span>
Label Design Service
</span>

<span>

{currencySymbol}
{Math.ceil(
convertCurrency(75)
)}

{' '}

{currency}

</span>

</div>
)}

            <div className="flex justify-between border-t pt-3 font-semibold text-gray-800 text-xl">
              <span>Total</span>
              <span>
  {hasOrder && currency === 'USD' && `$${displayTotal}`}
{hasOrder && currency === 'CAD' && `$${displayTotal}`}
{hasOrder && currency === 'GBP' && `£${displayTotal}`}
{hasOrder && currency === 'EUR' && `€${displayTotal}`}
</span>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-4 space-y-3">
  <h3 className="font-semibold text-green-800">
    Estimated Reseller Profit
  </h3>

  {jarQty > 0 && (
    <div>
      <div>60ct Gummies Jar</div>
      <div className="text-green-700">
{currencySymbol}{jarProfitLow.toFixed(2)} - {currencySymbol}{jarProfitHigh.toFixed(2)}  /jar    </div>
    </div>
  )}

  {pouchQty > 0 && (
    <div>
      <div>60ct Gummies Pouch</div>
      <div className="text-green-700">
{currencySymbol}{pouchProfitLow.toFixed(2)} - {currencySymbol}{pouchProfitHigh.toFixed(2)}  /pouch    </div>
    </div>
  )}

  {soapQty > 0 && (
    <div>
      <div>Sea Moss Soap</div>
      <div className="text-green-700">
        {currencySymbol}{soapProfitLow.toFixed(2)} - {currencySymbol}{soapProfitHigh.toFixed(2)} /bar
      </div>
    </div>
  )}
</div>
          </div>

          {roundedWeight >= 20 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 text-sm text-yellow-800">
              Import tax may apply. Most customers pay around $30–$60 USD through an online payment link or SMS notification after the shipment arrives.
            </div>
          )}

          <div className="text-center pt-4">
          {overLimit ? (
  <div className="text-3xl font-bold text-red-600">
    Please contact us for orders above 200kg
  </div>
) : (
  
<div
className="
flex
justify-center
items-end
gap-2
flex-wrap
"
>

{hasOrder && (

<>

<div
className="
text-[44px]
md:text-6xl
font-black
leading-none
text-center
break-all
max-w-full
"
>

{currencySymbol}
{displayTotal}

</div>

<div
className="
w-full
md:w-auto
text-center
text-base
md:text-2xl
font-bold
"
>

{currency}

</div>

</>

)}

</div>

)}
              <div className="mt-8 border rounded-3xl p-5 md:p-8 bg-white">

<h2 className="text-xl md:text-2xl font-bold mb-4">
Product Options
</h2>


{gummiesKg > 0 && (

<div className="mb-6">

<h3>
Bulk Flavors
</h3>

<p className="text-sm text-gray-500 mb-3">
No flavor MOQ. Mix any ratio.
</p>

<div className="flex flex-wrap gap-2 justify-center">

{[
'Passion Fruit',
'Mango',
'Pineapple',
'Ginger',
'Soursop',
'Berry',
'Orange',
'Pandan',
'Spirulina',
'Pea Flower - Mint'
].map((flavor)=>(

<button
type="button"
key={flavor}

onClick={()=>{

if(form.bulkFlavors.includes(flavor)){

setForm({
...form,
bulkFlavors:
form.bulkFlavors.filter(
f=>f!==flavor
)

})

}else{

setForm({

...form,

bulkFlavors:[
...form.bulkFlavors,
flavor
]

})

}

}}

className={

form.bulkFlavors.includes(flavor)

?

"px-4 py-2 rounded-full text-sm border transition bg-black text-white border-black"

:

"px-4 py-2 rounded-full text-sm border transition bg-white border-gray-300"

}

>

{flavor}

</button>

))}

</div>

</div>

)}



{jarQty > 0 && (

<div className="mb-6">

<h3 className="font-semibold mb-2">
Jar Flavors
</h3>

<p className="text-sm text-gray-500 mb-3">
No flavor MOQ. Mix any ratio.
</p>

<div className="flex flex-wrap gap-2 justify-center">

{[
'Passion Fruit',
'Mango',
'Pineapple',
'Ginger',
'Soursop',
'Berry',
'Orange',
'Pandan',
'Spirulina',
'Pea Flower - Mint'
].map((flavor)=>(

<button
type="button"
key={flavor}

onClick={()=>{

if(form.jarFlavors.includes(flavor)){

setForm({
...form,
jarFlavors:
form.jarFlavors.filter(
f=>f!==flavor
)

})

}else{

setForm({

...form,

jarFlavors:[
...form.jarFlavors,
flavor
]

})

}

}}

className={

form.jarFlavors.includes(flavor)

?

"px-4 py-2 rounded-full text-sm border transition bg-black text-white border-black"

:

"px-4 py-2 rounded-full text-sm border transition bg-white border-gray-300"

}

>

{flavor}

</button>

))}

</div>

</div>

)}

{pouchQty > 0 && (



<div className="mb-6">

<h3 className="font-semibold mb-2">
Pouch Flavors
</h3>

<p className="text-sm text-gray-500 mb-3">
No flavor MOQ. Mix any ratio.
</p>

<div className="flex flex-wrap gap-2 justify-center">

{[
'Passion Fruit',
'Mango',
'Pineapple',
'Ginger',
'Soursop',
'Berry',
'Orange',
'Pandan',
'Spirulina',
'Pea Flower - Mint'
].map((flavor)=>(

<button
type="button"
key={flavor}

onClick={()=>{

if(form.pouchFlavors.includes(flavor)){

setForm({
...form,
pouchFlavors:
form.pouchFlavors.filter(
f=>f!==flavor
)

})

}else{

setForm({

...form,

pouchFlavors:[
...form.pouchFlavors,
flavor
]

})

}

}}

className={

form.pouchFlavors.includes(flavor)

?

"px-4 py-2 rounded-full text-sm border transition bg-black text-white border-black"

:

"px-4 py-2 rounded-full text-sm border transition bg-white border-gray-300"

}

>

{flavor}

</button>

))}

</div>


</div>

)}

{soapQty > 0 && (

<div className="mb-6">

<h3>
Soap Scents
</h3>

                  <p className="text-sm text-gray-500 mb-3">No scent MOQ. Mix any ratio.</p>

<div className="flex flex-wrap gap-3 justify-center">

{[
'Lemongrass - Turmeric',
'Moringa - Mint - Green Tea',
'Honey - Turmeric',
].map((scent)=>(

<button
type="button"
key={scent}

onClick={()=>{

if(form.soapScents.includes(scent)){

setForm({
...form,
soapScents:
form.soapScents.filter(
s=>s!==scent
)
})

}else{

setForm({
...form,
soapScents:[
...form.soapScents,
scent
]
})

}

}}

className={
form.soapScents.includes(scent)
? "px-4 py-2 rounded-full border bg-black text-white"
: "px-4 py-2 rounded-full border"
}

>

{scent}

</button>

))}

</div>

</div>

)}

{jarQty > 0 && (

<div className="mb-6 mt-8">

<h3 className="font-semibold mb-2 text-center">
Jar Lid Color
</h3>

<div className="flex gap-3 flex-wrap justify-center">

{[
'Wooden',
'Black',
].map((lid)=>(

<button
key={lid}

type="button"

onClick={()=>setForm({
...form,
jarLid:lid
})}

className={
form.jarLid===lid
? "px-4 py-2 rounded-full bg-black text-white"
:"px-4 py-2 rounded-full border"
}

>

{lid}

</button>

))}

</div>

</div>
)}

{pouchQty > 0 && (

<div className="mb-6">

<h3 className="font-semibold mb-2">
Pouch Color
</h3>

<div className="flex gap-3 flex-wrap justify-center">

{[
'Silver',
'Brown Kraft',
'White Kraft',
].map((color)=>(

<button

type="button"

key={color}

onClick={()=>setForm({
...form,
pouchColor:color
})}

className={
form.pouchColor===color
? "px-4 py-2 rounded-full bg-black text-white"
:"px-4 py-2 rounded-full border"
}

>

{color}

</button>

))}

</div>

</div>

)}

<div className="mt-10">

{hasOrder && (


<div className="mb-8">

<h3 className="font-bold text-center text-xl mb-5">
🧾 Order Summary
</h3>

<div
className="
bg-gradient-to-b
from-white
to-gray-50
border
rounded-3xl
p-6
space-y-4
shadow-sm
"
>

<div className="space-y-5">

{form.gummies > 0 && (
<div className="bg-green-50 rounded-3xl p-5">

<div className="uppercase text-gray-500 text-sm font-bold">
Bulk Gummies
</div>

<div className="text-xl font-black mb-3">
{form.gummies} {unit}
</div>

<div className="space-y-2">

{form.bulkFlavors?.map((f)=>(

<div key={f}>
• {f}
</div>

))}

</div>

</div>
)}


{form.dry > 0 && (

<div className="bg-orange-50 rounded-3xl p-5">

<div className="uppercase text-gray-500 text-sm font-bold">
Gold Sea Moss
</div>

<div className="text-xl font-bold">
{form.dry} {unit}
</div>

</div>

)}

{form.soap > 0 && (
<div className="bg-yellow-50 rounded-3xl p-5">

<div className="uppercase text-gray-500 text-sm font-bold">
Sea Moss Soap
</div>

<div className="text-xl font-black mb-3">
{form.soap} bars
</div>

<div className="space-y-2">

{form.soapScents?.map((s)=>(

<div key={s}>
• {s} 
</div>

))}

</div>

</div>
)}

{form.jar > 0 && (
<div className="bg-blue-50 rounded-3xl p-5">

<div className="uppercase text-gray-500 text-sm font-bold">
60ct Gummies Jar
</div>

<div className="text-xl font-black mb-3">
{form.jar} jars
</div>

<div className="space-y-2">

{form.jarFlavors?.map((f)=>(

<div key={f}>
• {f}
</div>

))}

{form.jarLid && (

<div className="pt-3 font-semibold">

Lid: {form.jarLid}

</div>

)}

</div>

</div>
)}

{form.pouch > 0 && (
<div className="bg-purple-50 rounded-3xl p-5">

<div className="uppercase text-gray-500 text-sm font-bold">
60ct Gummies Pouch
</div>

<div className="text-xl font-black mb-3">
{form.pouch}
</div>

<div className="space-y-2">

{form.pouchFlavors?.map((f)=>(

<div key={f}>
• {f}
</div>

))}

{form.pouchColor && (

<div className="pt-3 font-semibold">

Color: {form.pouchColor}

</div>

)}

</div>

</div>
)}

{form.labelDesign && (

<div className="bg-pink-50 rounded-3xl p-5">

<div className="uppercase text-gray-500 text-sm font-bold">
Label Design
</div>

<div className="text-blue-700 font-bold">

Included
(+{currencySymbol}
{Math.ceil(convertCurrency(75))}
{' '}
{currency})

</div>

</div>

)}

</div>
<div className="text-sm text-gray-500 mb-3">
Estimated Total
</div>

{recommendation && (

<div
className="
mt-5
rounded-2xl
bg-amber-50
border
border-amber-200
p-4
text-center
text-sm
text-amber-800
"
>

{recommendation}

</div>

)}

</div>

<div
className="
text-center
text-[42px]
md:text-5xl
font-black
leading-none
break-all
mt-4
"
>

{currencySymbol}
{displayTotal}

<span className="block md:inline text-lg md:text-xl">
{currency}
</span>

</div>
</div>





)}

<div
className="
mb-8
space-y-3
"
>

<h3 className="text-center font-bold text-2xl mb-4">
Questions or Ready to Order?
</h3>

<input
placeholder="Your Name"
value={form.name}
onChange={(e)=>
setForm({
...form,
name:e.target.value
})
}
className="w-full p-3 rounded-xl border"
/>



<input
placeholder="Country"
value={form.country}
onChange={(e)=>
setForm({
...form,
country:e.target.value
})
}
className="w-full p-3 rounded-xl border"
/>





</div>



<div className="flex flex-col md:flex-row gap-3 justify-center">

<button

type="button"

onClick={()=>{

if(!hasOrder){

alert(
'Please add at least 1 product'
)

return

}

const msg =
encodeURIComponent(
buildOrderMessage()
)

window.open(
`https://wa.me/84348545435?text=${msg}`
)

}}

className="
bg-green-600
text-white
px-6
py-3
rounded-full
"

>

WhatsApp Quote

<br />
<span className="text-xs opacity-80">
Send order details instantly
</span>

</button>

<button

type="button"

onClick={async()=>{

try{

await navigator.clipboard.writeText(
buildOrderMessage()
)

window.open(
"https://instagram.com/seamosshangxanh",
"_blank"
)

}
catch{

alert(
"Could not copy automatically"
)

}

}}

className="
border
px-6
py-3
rounded-full
"

>

Instagram DM
<br />
<span className="text-xs opacity-80">
Message with copied order
</span>

</button>

</div>

<button

type="button"

onClick={()=>{

const order={

gummies:
form.gummies,

dry:
form.dry,

soap:
form.soap,

jar:
form.jar,

pouch:
form.pouch,

unit,

currency,

importNotice:
roundedWeight >= 20,

totalWeight:
roundedWeight,

jarUnit:
'jars',

soapUnit:
'bars',

pouchUnit:
'pouches',

bulkFlavors:
form.bulkFlavors,

jarFlavors:
form.jarFlavors,

pouchFlavors:
form.pouchFlavors,

soapScents:
form.soapScents,

jarLid:
form.jarLid,

pouchColor:
form.pouchColor,

labelDesign:
form.labelDesign,

total:
displayTotal,

usdTotal:
total

}

localStorage.setItem(
'checkoutOrder',
JSON.stringify(order)
)

window.location.href='/checkout'

}}

className="
w-full
rounded-full
bg-gradient-to-r
from-[#FFC439]
to-[#FFB347]
text-[#003087]
font-bold
py-5
mt-4
shadow-md
hover:brightness-95
transition
"

>

Checkout

<div
className="
text-xs
text-[#003087]
opacity-80
"
>

Secure shipping & payment

</div>

</button>

<p className="text-center text-sm text-gray-500 mt-3">

Need custom packing,
label or wholesale detail?
Message before payment.

</p>

</div>

</div>

                </div>
              </div>
            
                      
          </div>
        </div>
      
  )
}
