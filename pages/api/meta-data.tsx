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
          name: { en: 'All Lead', th: 'ลีดทั้งหมด' },
          path: 'lead',
          icon: 'user',
          permissionList: [
            // {
            //   permissionKey: 'ORG.MASTER_DATA.LOCATION',
            //   code: ['READ'],
            // },
          ],
        },
        {
          name: { en: 'All User', th: 'ผู้ใช้' },
          path: 'user',
          icon: 'user',
          // permissionList: [
          //   {
          //     permissionKey: 'ORG.MASTER_DATA.LOCATION',
          //     code: ['READ'],
          //   },
          // ],
        },
        {
          name: { en: 'All Organization', th: 'หน่วยงาน' },
          path: 'organization',
          icon: 'factory',
          // permissionList: [
          //   {
          //     permissionKey: 'ORG.MASTER_DATA.LOCATION',
          //     code: ['READ'],
          //   },
          // ],
        },
        {
          name: { en: 'All Product', th: 'สินค้า' },
          path: 'product',
          icon: 'product',
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
          icon: 'category',
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
          icon: 'factory',
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
