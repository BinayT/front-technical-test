import cardStyles from '../styles/productCard.module.css'
import Image from 'next/image'

export default function Product({ data }) {
  const discount = data.price * (data.discountPercentage / 100)
  const priceAfterDiscount = data.price - discount
  return (
    <div className={cardStyles.card}>
      <Image loader={() => data.images[0]} unoptimized={true} src={data.images[0]} height={200} width={200} alt="Avatar" />
      <div className={cardStyles.container}>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
        <p>Price: € {data.price} - <span style={{ color: 'red' }}>{data.discountPercentage} % </span> : € {priceAfterDiscount.toFixed(1)}</p>
      </div>
    </div>
  )
}
