from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in services_customization/__init__.py
from services_customization import __version__ as version

setup(
	name="services_customization",
	version=version,
	description="Services Customizations",
	author="Hybrowlabs",
	author_email="contact@hybrowlabs.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
