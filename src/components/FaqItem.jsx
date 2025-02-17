export default function FaqItem({ item, index }) {
  return (
    <div className="relative z-2 mb-16">
      <div className="group relative flex cursor-pointer items-center justify-between gap-10 px-7" onClick={()=>{}}>
{item.question}
      </div>
    </div>
  );
}
