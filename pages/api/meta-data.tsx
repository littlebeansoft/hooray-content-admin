import initMiddleware from '../../utils/metaDataMiddleware'
import Cors from 'cors'

const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

export default async function handler(req: any, res: any) {
  await cors(req, res)

  res.status(200).json({
    app: {
      menuOrder: 1,
      pattern: '${endpoint}/app/${authorization_code}/${path}?credentialKey=${credentialKey}',
      menuList: [
        {
          name: { en: 'Lead', th: 'ผู้มุ้งหวัง' },
          path: 'lead',
          icon: 'user-clock',
          permissionList: [
            // {
            //   permissionKey: 'ORG.MASTER_DATA.LOCATION',
            //   code: ['READ'],
            // },
          ],
        },
        {
          name: { en: 'Account', th: 'ผู้ใช้' },
          path: 'account',
          icon: 'user-unlock',
          // permissionList: [
          //   {
          //     permissionKey: 'ORG.MASTER_DATA.LOCATION',
          //     code: ['READ'],
          //   },
          // ],
        },
        {
          name: { en: 'Contact', th: 'ผู้ติดต่อ' },
          path: 'contact',
          icon: 'address-book',
          // permissionList: [
          //   {
          //     permissionKey: 'ORG.MASTER_DATA.LOCATION',
          //     code: ['READ'],
          //   },
          // ],
        },
        {
          name: { en: 'Setting', th: 'ตั้งค่า' },
          icon: 'box',
          permissionList: [
            {
              permissionKey: 'APP.SETTING',
              code: ['READ'],
            },
          ],
          subMenuList: [
            {
              name: { en: 'Master data', th: 'ข้อมูลในระบบ' },
              path: 'master-data',
              permissionList: [
                {
                  permissionKey: 'APP.SETTING.MASTER_DATA',
                  code: ['READ'],
                },
              ],
            },
          ],
        },
      ],
    },
    organization: {
      menuOrder: 1,
      pattern: '${endpoint}/org/${authorization_code}/${path}?credentialKey=${credentialKey}',
      menuList: [
        {
          name: { en: 'All Product', th: 'สินค้า' },
          path: 'product',
          icon: 'box-archive',
          // permissionList: [
          //   {
          //     permissionKey: 'ORG.MASTER_DATA.LOCATION',
          //     code: ['READ'],
          //   },
          // ],
        },
        {
          name: { en: 'All Category', th: 'หมวดหมู่สินค้า' },
          path: 'category',
          icon: 'boxes-stacked',
          // permissionList: [
          //   {
          //     permissionKey: 'ORG.MASTER_DATA.LOCATION',
          //     code: ['READ'],
          //   },
          // ],
        },
        {
          name: { en: 'Attribute', th: 'คุณสมบัติ' },
          path: 'attribute',
          icon: 'book',
          // permissionList: [
          //   {
          //     permissionKey: 'ORG.MASTER_DATA.LOCATION',
          //     code: ['READ'],
          //   },
          // ],
        },
        {
          name: { en: 'All Organization Label', th: 'เลเบลองค์กร' },
          path: 'organization-label',
          icon: 'tag',
          // permissionList: [
          //   {
          //     permissionKey: 'ORG.MASTER_DATA.LOCATION',
          //     code: ['READ'],
          //   },
          // ],
        },
      ],
    },
  })
}
