export type PerformanceType = {
  begin: string;
  end: string;
  grade: string;
  id: string;
  posterImageUrl: null | string;
  preBookingClosedAt: string;
  preBookingEnabled: boolean;
  runningTime: string;
  title: string;
};

export type CastingType = {
  id: string;
  performerName: string;
  performerId: string;
  roleName: string;
  roleId: string;
  profileUrl: string;
};
