import LensIcon from '../assets/icons/LensIcon'
import TmsIcon from '../assets/icons/TmsIcon'
import SentinelIcon from '../assets/icons/SentinelIcon'
import ExtensionIcon from '../assets/icons/ExtensionIcon'
import DriverAppIcon from '../assets/icons/DriverAppIcon'
import CalculatorIcon from '../assets/icons/CalculatorIcon'
import InsightsIcon from '../assets/icons/InsightsIcon'
import { URLS } from './urls'

export const NAV_LABELS = {
  PRODUCTS: 'Products',
  LOAN_CALCULATORS: 'Loan Calculators',
  INSIGHTS: 'Insights',
  SIGN_UP: 'sign up',
  HOME: 'Home',
  LENS: 'Lens',
  TMS: 'TMS',
  SENTINEL: 'Sentinel',
  EXTENSION: 'Extension',
  SPOTTER_APP: 'Spotter App',
} as const

export const DEFAULT_LINKS = [
  { label: NAV_LABELS.HOME, href: URLS.HOME },
] as const

export const PRODUCT_DROPDOWN_ITEMS = [
  { label: NAV_LABELS.LENS, href: URLS.LENS, icon: LensIcon },
  { label: NAV_LABELS.TMS, href: URLS.TMS, icon: TmsIcon },
  { label: NAV_LABELS.SENTINEL, href: URLS.SENTINEL, icon: SentinelIcon },
  { label: NAV_LABELS.EXTENSION, href: URLS.EXTENSION, icon: ExtensionIcon },
  { label: NAV_LABELS.SPOTTER_APP, href: URLS.DRIVER_APP, icon: DriverAppIcon },
] as const

export const NAV_ITEMS = [
  { label: NAV_LABELS.LOAN_CALCULATORS, href: URLS.LOAN_CALCULATORS, icon: CalculatorIcon },
  { label: NAV_LABELS.INSIGHTS, href: URLS.INSIGHTS, icon: InsightsIcon },
] as const
