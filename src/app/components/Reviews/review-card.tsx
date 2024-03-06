export interface ReviewCardProps {
  reviewerName: string;
  reviewText: string;
}

function ReviewCard({ reviewerName, reviewText }: ReviewCardProps) {
  return (
    <div className=" relative h-[358px] overflow-y-auto bg-white rounded-xl px-4 pt-2 pb-[42px] before:content-quotes before:absolute before:top-[10px] after:content-quotes after:absolute after:bottom-[10px] after:right-[10px] ">
      <h3 className=" font-sans font-bold text-[24px] text-center mb-[24px]">
        {reviewerName}
      </h3>
      <p className=" text-[18px] font-normal">{reviewText}</p>
    </div>
  );
}

export default ReviewCard;
