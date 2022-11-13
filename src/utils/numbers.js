
export const formatPrice = (val, decimals) => {
    const value = Number.parseFloat(val);
    return (Math.round(value * 100) / 100).toFixed(decimals) + " €";
}