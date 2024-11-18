interface ListingProps {
    items: ListingItem[];
}


export interface ListingItem {
    listing_id: number;
    url: string;
    MainImage: {
        url_570xN: string;
    };
    title: string;
    currency_code: string;
    price: string;
    quantity: number;
}

const Listing: React.FC<ListingProps> = ({ items }) => {
    console.log(items);

    const textCut = (text: string, maxLength: number) => {
        if (text === undefined) {
            return '';
          }
        if (text.length <= maxLength) {
          return text;
        }
        return text.slice(0, maxLength) + '…';
      };

    const formatPrice = (price: string, currencyCode: string) => {
        const currencySymbols = {
            USD: '$',
            EUR: '€'
        }

        if (currencyCode in currencySymbols) {
            return `${currencySymbols[currencyCode as keyof typeof currencySymbols]}${price}`;
        } else {
            return `${price} ${currencyCode}`
        }
    }

    const formatQuantity = (quantity: number) => {
        if (quantity <= 10) {
            return "level-low";
        } else if (quantity <= 20) {
            return "level-medium";
        } else {
            return "level-high";
        }

    }

    return (
        <>
          {items.map((item) => (
            item.MainImage && item.MainImage.url_570xN && (
              <div key={item.listing_id} className='item'>
                <div className='item-image'>
                  <a href={item.url}>
                    <img src={item.MainImage.url_570xN} alt={item.title} />
                  </a>
                </div>
                <div className="item-details">
                  <p className='item-title'>{textCut(item.title, 50)}</p>
                  <p className='item-price'>{formatPrice(item.price, item.currency_code)}</p>
                  <p className={`item-quantity ${formatQuantity(item.quantity)}`}>{item.quantity} left</p>
                </div>
              </div>
            )
          ))}
        </>
      )
}

export default Listing