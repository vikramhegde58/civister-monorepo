import Image from "next/image";

interface Plan2DProps {
  imageUrl: string;
  alt: string;
}

export default function Plan2D({ imageUrl, alt }: Plan2DProps) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border bg-muted">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={alt}
          fill
          className="object-contain p-4"
          unoptimized // For now as we use local/mock images that might not exist
        />
      ) : (
        <div className="flex h-full items-center justify-center text-muted-foreground">
          No 2D Plan Available
        </div>
      )}
    </div>
  );
}

