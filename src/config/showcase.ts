const asset = (fileName: string) => `${import.meta.env.BASE_URL}assets/${fileName}`

export const showcaseAssets = {
  // Replace these files in public/assets/ with your real NOTIFY screens.
  logo: asset('notify-logo.png'),
  dashboardHome: asset('dashboard-home.png'),
  alertCreation: asset('alert-creation.png'),
  campusMap: asset('campus-map.png'),
  analytics: asset('analytics.png'),
  usersPermissions: asset('users-permissions.png'),
  adminAlerts: asset('alerts-admin.png'),
  adminCourses: asset('courses-admin.png'),
  mobile: {
    student: asset('mobile-student.png'),
    teacher: asset('mobile-teacher.png'),
    technician: asset('mobile-technician.png'),
    staff: asset('mobile-staff.png'),
    admin: asset('mobile-admin.png'),
  },
} as const

export const showcaseScenes = [
  { id: 'intro', duration: 4.5 },
  { id: 'dashboard', duration: 5.8 },
  { id: 'alert-flow', duration: 5.1 },
  { id: 'routing', duration: 7.2 },
  { id: 'map', duration: 5.0 },
  { id: 'analytics', duration: 5.4 },
  { id: 'security', duration: 4.2 },
  { id: 'outro', duration: 4.8 },
] as const

export type SceneId = (typeof showcaseScenes)[number]['id']

export const preloadAssets = [
  showcaseAssets.logo,
  showcaseAssets.dashboardHome,
  showcaseAssets.alertCreation,
  showcaseAssets.campusMap,
  showcaseAssets.analytics,
  showcaseAssets.usersPermissions,
  showcaseAssets.adminAlerts,
  showcaseAssets.adminCourses,
  showcaseAssets.mobile.student,
  showcaseAssets.mobile.teacher,
  showcaseAssets.mobile.technician,
  showcaseAssets.mobile.staff,
  showcaseAssets.mobile.admin,
]

export const roleDeliveries = [
  {
    role: 'Student',
    message: 'Course moved to Building C at 10:00',
    accent: 'teal',
    src: showcaseAssets.mobile.student,
  },
  {
    role: 'Teacher',
    message: 'Class update sent to Year 2 engineering',
    accent: 'navy',
    src: showcaseAssets.mobile.teacher,
  },
  {
    role: 'Technician',
    message: 'Lab projector fault detected in Zone 4',
    accent: 'accent',
    src: showcaseAssets.mobile.technician,
  },
  {
    role: 'Staff',
    message: 'Operations team coordinating service interruption',
    accent: 'teal',
    src: showcaseAssets.mobile.staff,
  },
  {
    role: 'Admin',
    message: 'Institution-wide critical alert approval ready',
    accent: 'navy',
    src: showcaseAssets.mobile.admin,
  },
] as const

export const metrics = [
  {
    label: 'Delivered alerts',
    value: 9840,
    suffix: '',
    accent: 'teal',
  },
  {
    label: 'Read rate',
    value: 96,
    suffix: '%',
    accent: 'accent',
  },
  {
    label: 'Pending acknowledgements',
    value: 18,
    suffix: '',
    accent: 'navy',
  },
] as const

export const securityPoints = [
  'Controlled access by role and permission',
  'Official institution-managed communication only',
  'Structured routing for urgent and location-specific alerts',
] as const
