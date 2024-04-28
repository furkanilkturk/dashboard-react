import HourlyProductSaleNotification from "./NotificationsType/HourlyProductSaleNotification";
import MailNotification from "./NotificationsType/MailNotification";
import MessageNotification from "./NotificationsType/MessageNotification";
import { NotificationsData } from "./NotificationsType/NotificationsData";
import ProductStatus from "./NotificationsType/ProductStatus";

export default function Inbox() {
  return (
    <>
      {NotificationsData.map((data) => {
        if (data.notificationType === "message") {
          return (
            <MessageNotification
              name={data.name}
              time={data.time}
              date={data.date}
              content={data.content}
              avatar={data.avatar}
            />
          );
        } else if (data.notificationType === "hourlyProduct") {
          return (
            <HourlyProductSaleNotification
              productName={data.product}
              productImage={data.productImage}
              amount={data.amount}
              time={data.time}
              date={data.date}
            />
          );
        } else if (data.notificationType === "mail") {
          return (
            <MailNotification
              name={data.name}
              time={data.time}
              date={data.date}
            />
          );
        } else if (data.notificationType === "productStatus") {
          return (
            <ProductStatus
              product={data.product}
              productImage={data.productImage}
              time={data.time}
              date={data.date}
              status={data.status}
            />
          );
        }
      })}
      {/* <MessageNotification />
      <HourlyProductSaleNotification />
      <ProductStatus />
      <MailNotification /> */}
    </>
  );
}
