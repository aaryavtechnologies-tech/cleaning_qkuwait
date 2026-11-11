export interface VerifiedTestimonial {
  id: string;
  clientNameEn: string;
  clientNameAr: string;
  areaEn: string;
  areaAr: string;
  serviceEn: string;
  serviceAr: string;
  quoteEn: string;
  quoteAr: string;
  rating: number;
}

/**
 * Intentionally empty until verified customer reviews are supplied.
 * The Testimonials section automatically remains hidden when this array is empty
 * so no unverified or fabricated reviews are ever displayed to visitors.
 */
export const VERIFIED_TESTIMONIALS: VerifiedTestimonial[] = [];

