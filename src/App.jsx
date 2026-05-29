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
  const [form, setForm] = useState({
    gummies: '',
    dry: '',
    soap: '',
    jar: '',
    pouch: '',
    labelDesign: false
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
  if (soapQty > 0 && roundedWeight > 20) {
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
const jarUnitCost =
  jarQty > 0 ? jarLanded / jarQty : 0;

const pouchUnitCost =
  pouchQty > 0 ? pouchLanded / pouchQty : 0;

const soapUnitCost =
  soapQty > 0 ? soapLanded / soapQty : 0;

// Estimated reseller profit
const jarProfitLow = 30 - jarUnitCost;
const jarProfitHigh = 35 - jarUnitCost;

const pouchProfitLow = 25 - pouchUnitCost;
const pouchProfitHigh = 30 - pouchUnitCost;

const soapProfitLow = 12 - soapUnitCost;
const soapProfitHigh = 15 - soapUnitCost;

  const labelDesignCost = form.labelDesign ? 75 : 0;

  const total = Math.ceil(productCost + shippingCost + labelDesignCost);
  const [currency, setCurrency] = useState('USD');

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

const displayTotal = Math.ceil(convertCurrency(total));

  const overLimit = roundedWeight > 200;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 space-y-8">
        <div>
          <h1 className="text-4xl font-bold">Larry Sea Moss / Sea Moss Hang Xanh</h1>
          <p className="text-gray-500 mt-2">
            Price included shipping already to US, UK, Canada, EU, Dubai, Saudi Arabia
          </p>
        </div>

        <div className="flex gap-3">
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
        <div className="flex gap-3 mt-4">
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
              Dry Sea Moss ({unit})
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
                Labeling apply & seal included
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
              Add Label Design Service (+$75 USD)
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
    <span>${13.4.toFixed(2)} / kg</span>
  </div>
)}

            {dryKg > 0 && (
  <div className="flex justify-between">
    <span>Gold Sea Moss</span>
    <span>${12.14.toFixed(2)} / kg</span>
  </div>
)}

            {soapQty > 0 && (
  <div className="flex justify-between">
    <span>Sea Moss Soap</span>
    <span>${soapUnitCost.toFixed(2)} / bar</span>
  </div>
)}

           {jarQty > 0 && (
  <div className="flex justify-between">
    <span>60ct Gummies Jar</span>
    <span>${jarUnitCost.toFixed(2)} / jar</span>
  </div>
)}

           {pouchQty > 0 && (
  <div className="flex justify-between">
    <span>60ct Gummies Pouch</span>
    <span>${pouchUnitCost.toFixed(2)} / pouch</span>
  </div>
)}

            {form.labelDesign && (
              <div className="flex justify-between">
                <span>Label Design Service</span>
                <span>$75</span>
              </div>
            )}

            <div className="flex justify-between border-t pt-3 font-semibold text-gray-800 text-xl">
              <span>Total</span>
              <span>
  {currency === 'USD' && `$${displayTotal}`}
  {currency === 'CAD' && `$${displayTotal}`}
  {currency === 'GBP' && `£${displayTotal}`}
  {currency === 'EUR' && `€${displayTotal}`}
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
        ${jarProfitLow.toFixed(2)} - ${jarProfitHigh.toFixed(2)} profit per jar
      </div>
    </div>
  )}

  {pouchQty > 0 && (
    <div>
      <div>60ct Gummies Pouch</div>
      <div className="text-green-700">
        ${pouchProfitLow.toFixed(2)} - ${pouchProfitHigh.toFixed(2)} profit per pouch
      </div>
    </div>
  )}

  {soapQty > 0 && (
    <div>
      <div>Sea Moss Soap</div>
      <div className="text-green-700">
        ${soapProfitLow.toFixed(2)} - ${soapProfitHigh.toFixed(2)} profit per bar
      </div>
    </div>
  )}
</div>
          </div>

          {roundedWeight > 20 && (
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
            <div className="text-6xl font-bold tracking-tight">
              {currency === 'USD' && `$${displayTotal} USD`}
{currency === 'CAD' && `$${displayTotal} CAD`}
{currency === 'GBP' && `£${displayTotal} GBP`}
{currency === 'EUR' && `€${displayTotal} EUR`}
            </div>
                      )}
          </div>
        </div>
      </div>
    </div>
  );
}
